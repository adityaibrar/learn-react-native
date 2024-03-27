import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BoxButton from '../components/box_button';

type Nav = {
  navigate: (value: string) => void;
};

const Dashboard = () => {
  const {navigate} = useNavigation<Nav>();
  const goPage = (page: string) => {
    navigate(page);
  };
  return (
    <View style={styles.container}>
      <BoxButton onPress={() => goPage('List user')} text="List User" />
      <BoxButton onPress={() => goPage('Profile')} text="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
