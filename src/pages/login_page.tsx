import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Logo from '../components/logo';
import LoginButton from '../components/button';
import TextInputField from '../components/input_field';

type Nav = {
  navigate: (value: string) => void;
};

const LoginPage = () => {
  const {navigate} = useNavigation<Nav>();

  const goPage = (page: string) => {
    navigate(page);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          console.log(data.token);
          Alert.alert('Login successful', 'You are now logged in');
          goPage('Dashboard');
        } else {
          console.log(data.error);
          Alert.alert('Login failed', data.error);
        }
      })
      .catch(error => {
        Alert.alert('An error occurred', error.toString());
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Logo />
        <Text style={styles.title}>Technical</Text>

        {/* Tambahkan label "Username" di sebelah kiri TextInputField */}
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInputField
            secureTextEntry={false}
            placeholder="Example:eve.holt@reqres.in"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Tambahkan label "Password" di sebelah kiri TextInputField */}
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInputField
            placeholder="Example:cityslicka"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <LoginButton onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: 'black',
    height: 20,
    fontSize: 16,
    marginBottom: 10,
  },
  inputLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    marginRight: 10,
  },
});

export default LoginPage;
