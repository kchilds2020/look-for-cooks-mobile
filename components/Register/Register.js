import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import Header from '../NavBar/Header'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

const Register = ({navigation}) => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <>
            <Header navigation={navigation}/>
            <LoginBody>
                <LoginContainer>
                    <ContainerTitle>Register</ContainerTitle>
                    <Input onChangeText={firstname => setFirstname(firstname)} value={firstname} placeholder='First Name' />
                    <Input onChangeText={lastname => setLastname(password)} value={lastname} placeholder='Last Name' />
                    <Input onChangeText={email => setUsername(email)} value={email} placeholder='Email Address' />
                    <Input onChangeText={number => setPassword(number)} value={number} placeholder='Phone Number' />
                    <Input onChangeText={username => setUsername(username)} value={username} placeholder='Username' />
                    <Input onChangeText={password => setPassword(password)} value={password} placeholder='Password' />
                    <LoginButton onPress = {() => console.log('clicked')}><ButtonText>Register</ButtonText></LoginButton>
                </LoginContainer>
            </LoginBody>
        </>
    )
}

export default Register

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
    margin-top: 20px;
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
