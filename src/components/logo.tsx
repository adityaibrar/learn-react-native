import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/logo.png')} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginTop: 124,
    width: 200,
    height: 200,
    marginBottom: 24,
  },
});

export default Logo;
