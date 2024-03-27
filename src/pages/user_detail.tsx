import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserDetailsItem from '../components/user_detail_item';

function UserDetails(props: any) {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.route.params.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <UserDetailsItem label="Name" value={userData.name} />
          <UserDetailsItem label="Username" value={userData.username} />
          <UserDetailsItem label="Email" value={userData.email} />
          <UserDetailsItem label="Phone" value={userData.phone} />
          <UserDetailsItem
            label="Address"
            value={`${userData.address.street} ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`}
          />
          <UserDetailsItem label="Website" value={userData.website} />
        </>
      ) : (
        <Text style={styles.loading}>Loading user data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loading: {
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserDetails;
