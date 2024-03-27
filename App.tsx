import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListDataPage from './src/pages/list_data_page';
import LoginPage from './src/pages/login_page';
import Dashboard from './src/pages/dashboard';
import Profile from './src/pages/profile';
import UserDetails from './src/pages/user_detail';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="List user" component={ListDataPage} />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerLeft(props) {
              return null;
            },
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="User detail" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
