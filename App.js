import 'react-native-gesture-handler';
import React, {useState} from 'react';
import styled from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from './components/UserContext';

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Cooks from './components/Cooks/Cooks'
import Menu from './components/Menu/Menu'

/* const Stack = createStackNavigator(); */
const Drawer = createDrawerNavigator();

const App = () => {

  const [user, setUser] = useState('')

  return (
    <Body>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login">
          {user ? (
            <>
              <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
              <Drawer.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
              <Drawer.Screen name="Cooks" component={Cooks} options={{ title: 'Cooks' }} />
            </> 
          ) : (
            <>
              <Drawer.Screen name="Login" component={Login} options={{ title: 'Login' }} />
              <Drawer.Screen name="Register" component={Register} options={{ title: 'Register' }} />
            </>
          )}
          
          </Drawer.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </Body>
  );
};

const Body = styled.View`
    flex: 1;
    background-color: #f4f4f4
`;

export default App;
