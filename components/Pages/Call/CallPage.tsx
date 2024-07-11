import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { SegmentedControl } from '../Chat/SegmentedControl';
import calls from '@/assets/data/calls.json';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import Animated, {
  CurvedTransition,
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import SwipeableRow from '../Chat/SwipeableRow';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/Colors';

const transition = CurvedTransition.delay(100);

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [items, setItems] = useState(calls);
  const [isEditing, setIsEditing] = useState(false);
  const editing = useSharedValue(-30);

  const onSegmentChange = (option: string) => {
    setSelectedOption(option);
    if (option === 'All') {
      setItems(calls);
    } else {
      setItems(calls.filter((call) => call.missed));
    }
  };

  const removeCall = (toDelete: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setItems(items.filter((item) => item.id !== toDelete.id));
  };

  const onEdit = () => {
    let editingNew = !isEditing;
    editing.value = editingNew ? 0 : -30;
    setIsEditing(editingNew);
  };

  const animatedRowStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(editing.value) }],
  }));

  const animatedPosition = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(editing.value) }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: Colors.background, paddingTop:30 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onEdit} style={styles.headerLeft}>
            <Text style={{ color: Colors.primary, fontSize: 18 }}>
              {isEditing ? 'Done' : 'Edit'}
            </Text>
          </TouchableOpacity>
          <SegmentedControl
            options={['All', 'Missed']}
            selectedOption={selectedOption}
            onOptionPress={onSegmentChange}
          />
          <View style={styles.headerRight} />
          <Ionicons name="call" size={24} color={Colors.primary} />
        </View>
        <Text style={styles.headerTitle}>Calls</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ paddingBottom: 40 }}>
          <Animated.View style={[defaultStyles.block]} layout={transition}>
            <Animated.FlatList
              skipEnteringExitingAnimations
              data={items}
              scrollEnabled={false}
              itemLayoutAnimation={transition}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
              renderItem={({ item, index }) => (
                <SwipeableRow onDelete={() => removeCall(item)}>
                  <Animated.View
                    entering={FadeInUp.delay(index * 20)}
                    exiting={FadeOutUp}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AnimatedTouchableOpacity
                      style={[animatedPosition, { paddingLeft: 8 }]}
                      onPress={() => removeCall(item)}>
                      <Ionicons name="remove-circle" size={24} color={Colors.red} />
                    </AnimatedTouchableOpacity>

                    <Animated.View
                      style={[defaultStyles.item, { paddingLeft: 20 }, animatedRowStyles]}>
                      <Image source={{ uri: item.img }} style={styles.avatar} />

                      <View style={{ flex: 1, gap: 2 }}>
                        <Text style={{ fontSize: 18, color: item.missed ? Colors.red : '#000' }}>
                          {item.name}
                        </Text>

                        <View style={{ flexDirection: 'row', gap: 4 }}>
                          <Ionicons
                            name={item.video ? 'videocam' : 'call'}
                            size={16}
                            color={Colors.gray}
                          />
                          <Text style={{ color: Colors.gray, flex: 1 }}>
                            {item.incoming ? 'Incoming' : 'Outgoing'}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 6,
                          alignItems: 'center',
                        }}>
                        <Text style={{ color: Colors.gray }}>{format(item.date, 'MM.dd.yy')}</Text>
                        <Ionicons
                          name="information-circle-outline"
                          size={24}
                          color={Colors.primary}
                        />
                      </View>
                    </Animated.View>
                  </Animated.View>
                </SwipeableRow>
              )}
            />
          </Animated.View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="refresh" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="call" size={24} color={Colors.primary} />
            <Text style={styles.bottomBarText}>Calls</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="people" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Communities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="chatbubbles" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="settings" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEEF6',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: "#000",
    marginLeft: 10,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 12,
    color: Colors.gray,
  },
});
export default Page;
