import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BoxButton = ({onPress, text}: {onPress: () => void, text: string}) => {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BoxButton;
