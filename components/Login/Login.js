import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import Header from '../NavBar/Header'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import {UserContext} from '../UserContext'

const Login = ({navigation}) => {
    let {user, setUser} = useContext(UserContext)
    console.log('HOME USER CONTEXT', user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async () => {
        console.log('clicked function')
        try {
            const response = await axios.post('https://lookforcooks.com/login-user', {username: username, password: password})
            response.data.username === username ? setUser(response.data) : alert(response.data)
        } catch (error) {console.log(error)}
    }

    return (
        <>
            <Header navigation={navigation}/>
            <LoginBody>
                <LoginContainer>
                    <ContainerTitle>Login</ContainerTitle>
                    <Input onChangeText={username => setUsername(username)} value={username} placeholder='Username' />
                    <Input onChangeText={password => setPassword(password)} value={password} placeholder='Password' />
                    <LoginButton onPress = {loginUser}><ButtonText>Login</ButtonText></LoginButton>
                </LoginContainer>
            </LoginBody>
        </>
    )
}

export default Login


const LoginBody = styled.View`
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    height: 75%;
`;

const LoginContainer = styled.View`
    background-color: white;
    width: 95%;
    font-size: 18px;
    margin-top: 80px;
    padding: 20px;
    border-radius: 8px;
`;

const ContainerTitle = styled.Text`
    font-size: 24px;
`;

const Input = styled.TextInput`
    background-color: rgb(232, 240, 254);
    width: 100%;
    margin: 5px auto;
    padding: 10px;
    border-radius: 8px;
    font-size: 18px;
`;

const LoginButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #007bff;
    padding: 10px;
    margin: 10px auto;
    border-radius: 8px;

`;

const ButtonText = styled.Text`
   color: white;
   font-size: 18px;
   font-weight: bold;
`;

