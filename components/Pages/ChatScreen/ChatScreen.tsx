import ChatMessageBox from '../Chat/ChatMessageBox';
import ReplyMessageBar from '../Chat/ReplyMessageBar';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
  IMessage,
} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import messageData from '@/assets/data/messages.json';

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState('');
  const insets = useSafeAreaInsets();

  const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);
  const swipeableRowRef = useRef<Swipeable | null>(null);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? 'You' : 'Bob',
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: 'All your base are belong to us',
        createdAt: new Date(),
        user: {
          _id: 0,
          name: 'Bot',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any[]) => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{ backgroundColor: Colors.background }}
        renderActions={() => (
          <View style={{ height: 44, justifyContent: 'center', alignItems: 'center', left: 5 }}>
            <Ionicons name="add" color={Colors.primary} size={28} />
          </View>
        )}
      />
    );
  };

  const updateRowRef = useCallback(
    (ref: any) => {
      if (
        ref &&
        replyMessage &&
        ref.props.children.props.currentMessage?._id === replyMessage._id
      ) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color={Colors.primary} style={styles.icon} />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=desilva@marketoid.com' }}
          style={styles.avatar}
        />
        <Text style={styles.headerTitle}>Nishani</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="videocam-outline" size={24} color={Colors.primary} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call-outline" size={24} color={Colors.primary} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('@/assets/images/pattern.png')}
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          marginBottom: insets.bottom,
        }}>
        <GiftedChat
          messages={messages}
          onSend={(messages: any) => onSend(messages)}
          onInputTextChanged={setText}
          user={{
            _id: 1,
          }}
          renderSystemMessage={(props) => (
            <SystemMessage {...props} textStyle={{ color: Colors.gray }} />
          )}
          bottomOffset={insets.bottom}
          renderAvatar={null}
          maxComposerHeight={100}
          textInputProps={styles.composer}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: '#000',
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: '#fff',
                  },
                  right: {
                    backgroundColor: Colors.lightGreen,
                  },
                }}
              />
            );
          }}
          renderSend={(props) => (
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                paddingHorizontal: 14,
              }}>
              {text === '' && (
                <>
                  <Ionicons name="camera-outline" color={Colors.primary} size={28} />
                  <Ionicons name="mic-outline" color={Colors.primary} size={28} />
                </>
              )}
              {text !== '' && (
                <Send
                  {...props}
                  containerStyle={{
                    justifyContent: 'center',
                  }}>
                  <Ionicons name="send" color={Colors.primary} size={28} />
                </Send>
              )}
            </View>
          )}
          renderInputToolbar={renderInputToolbar}
          renderChatFooter={() => (
            <ReplyMessageBar clearReply={() => setReplyMessage(null)} message={replyMessage} />
          )}
          onLongPress={(context, message) => setReplyMessage(message)}
          renderMessage={(props) => (
            <ChatMessageBox
              {...props}
              setReplyOnSwipeOpen={setReplyMessage}
              updateRowRef={updateRowRef}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingTop: 30,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  composer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingHorizontal: 10,
    paddingTop: 8,
    fontSize: 16,
    marginVertical: 4,
  },
});

export default Page;
