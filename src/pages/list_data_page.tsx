import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';

import UserItem from '../components/user_item';

function ListDataPage(props: any) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('berhasil mendapatkan data');
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View>
      <ScrollView>
        {users.map((user: any) => (
          <UserItem
            key={user.id}
            user={user}
            onPress={() =>
              props.navigation.navigate('User detail', {id: user.id})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ListDataPage;
