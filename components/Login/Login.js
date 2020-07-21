import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import Header from '../Header'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Header navigation={navigation}/>
            <LoginBody>
                <LoginContainer>
                    <ContainerTitle>Login</ContainerTitle>
                    <Input
                        onChangeText={username => setUsername(username)}
                        value={username}
                        />
                    <Input
                        onChangeText={password => setPassword(password)}
                        value={password}
                        />
                    <LoginButton onPress = {() => console.log('clicked')}><ButtonText>Login</ButtonText></LoginButton>
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
    margin: 10px auto;
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

