import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import chats from '@/assets/data/chats.json';
import ChatRow from '../Chat/ChatRow';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ellipsis-horizontal" size={25} color={Colors.primary} style={styles.headerIcon} />
        <View style={styles.headerRightIcons}>
          <Ionicons name="camera-outline" size={25} color={Colors.primary} style={styles.headerIcon} />
          <Ionicons name="create-outline" size={25} color={Colors.primary} style={styles.headerIcon} />
        </View>
      </View>
      <Text style={styles.headerTitle}>Chats</Text>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatRow {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
        )}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="refresh" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="call-outline" size={24}  color={Colors.gray} />
            <Text style={styles.bottomBarText}>Calls</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="people" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Communities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="chatbubbles" size={24} color={Colors.primary} />
            <Text style={styles.bottomBarText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarItem}>
            <Ionicons name="settings" size={24} color={Colors.gray} />
            <Text style={styles.bottomBarText}>Settings</Text>
          </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginHorizontal: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  flatListContent: {
    paddingBottom: 100,
  },
  bottomBar: {
    height: 60,
    width: '100%',
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
  },
  bottomBarIcon: {
    marginHorizontal: 20,
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
