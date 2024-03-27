import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      cursorColor={'black'}
      placeholderTextColor={'gray'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default TextInputField;
