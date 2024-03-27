import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ibrar.png')}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Aditya Ibrar Abdillah</Text>
      <Text style={styles.bio}>Mobile Developer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>adityaibrar@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Github:</Text>
        <Text style={styles.infoValue}>github.com/adityaibrar</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>+62-8523-0258-986</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoValue: {
    color: 'gray',
    flex: 1,
  },
});

export default Profile;
