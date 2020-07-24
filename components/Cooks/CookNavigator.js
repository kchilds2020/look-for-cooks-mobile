import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../UserProfile/UserProfile'
import Cooks from './Cooks'
import styled from 'styled-components'
import Hamburger from '../NavBar/Hamburger'

const Stack = createStackNavigator();

const CookNavigator = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Cooks">
            <Stack.Screen name="UserProfile" component={UserProfile} options={({ route }) => ({ title: route.params.username, headerRight: () => (
            <DrawerButton>
                    <TouchableOpacity onPress = {() => navigation.toggleDrawer()} ><Hamburger /></TouchableOpacity>
            </DrawerButton>
          ) })}/>
            <Stack.Screen name="Cooks" component={Cooks} options={({ route }) => ({ title: <Logo source={require('../../images/hat.png')} />, headerRight: () => (
            <DrawerButton>
                    <TouchableOpacity onPress = {() => navigation.toggleDrawer()} ><Hamburger /></TouchableOpacity>
            </DrawerButton>
          ) })}/>
        </Stack.Navigator>
    )
}

export default CookNavigator

const DrawerButton = styled.View`
    margin-right: 20px;
    color: black;
`;

const Logo = styled.Image`
    width: 55px;
    height: 50px;
    margin: 20px;
`;