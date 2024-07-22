import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import contacts from '@/assets/data/contacts.json';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';

interface Contact {
  first_name: string;
  last_name: string;
  img: string;
  desc: string;
}

const Page: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter((contact: Contact) =>
    `${contact.first_name} ${contact.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: Contact }) => (
    <>
      <View style={styles.listItemContainer}>
        <Image source={{ uri: item.img }} style={styles.listItemImage} />
        <View>
          <Text style={{ color: '#000', fontSize: 14 }}>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={{ color: Colors.gray, fontSize: 12 }}>
            {item.desc.length > 40 ? `${item.desc.substring(0, 40)}...` : item.desc}
          </Text>
        </View>
      </View>
      <View style={[defaultStyles.separator, { marginLeft: 50 }]} />
    </>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.crossIconContainer}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Chat</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color={Colors.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search name or number"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.first_name} ${item.last_name}`}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  crossIconContainer: {
    position: 'absolute',
    left: 10,
    top: 50,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18, 
    paddingHorizontal: 35, 
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  listItemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default Page;
