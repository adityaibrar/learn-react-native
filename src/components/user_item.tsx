import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const UserItem = ({user, onPress}: {user: any, onPress: any}) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'blue',
  },
});

export default UserItem;
