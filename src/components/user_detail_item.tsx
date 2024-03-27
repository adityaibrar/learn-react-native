import React from 'react';
import {Text, StyleSheet} from 'react-native';

const UserDetailsItem = ({label, value}: {label: string; value: string}) => {
  return (
    <>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.text}>{value}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 8,
  },
});

export default UserDetailsItem;
