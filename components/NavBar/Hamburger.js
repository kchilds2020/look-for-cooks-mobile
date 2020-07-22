import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const Hamburger = () => {
    return (
        <View>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </View>
    )
}

export default Hamburger

const Line = styled.View`
    background-color: #333;
    height: 5px;
    width: 35px;
    margin-top: 5px;
`;
