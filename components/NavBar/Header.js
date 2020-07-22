import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Hamburger from './Hamburger'

const Header = ({navigation}) => {
    return (
        <Overlay >
            <Container>
                <Title>Look for Cooks</Title>
                <DrawerButton>
                    <TouchableOpacity onPress = {() => navigation.toggleDrawer()} ><Hamburger /></TouchableOpacity>
                </DrawerButton>
            </Container>
        </Overlay>
    )
}

export default Header

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 70px;
    font-size: 18px;
`;

const Overlay = styled.View`
    background-color: rgb(86, 140, 202);
    height: 77px;
`;

const Title = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const DrawerButton = styled.View`
    margin-right: 20px;
    color: black;
`;

