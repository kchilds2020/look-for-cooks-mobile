import 'react-native-gesture-handler';
import React, {useState} from 'react';
import styled from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

/* const Stack = createStackNavigator(); */
const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <Body>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
        {isLoggedIn ? (
          <>
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          </> 
        ) : (
          <>
            <Drawer.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            <Drawer.Screen name="Register" component={Register} options={{ title: 'Register' }} />
          </>
        )}
         
        </Drawer.Navigator>
      </NavigationContainer>
    </Body>
  );
};

const Body = styled.View`
    flex: 1;
    background-color: #f4f4f4
`;

export default App;
