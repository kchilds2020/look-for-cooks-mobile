import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home/Home'
import Login from './components/Login/Login'

/* const Stack = createStackNavigator(); */
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Body>
      <NavigationContainer>
      
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        </Stack.Navigator> */}
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />  
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
