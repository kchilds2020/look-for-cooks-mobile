import React from 'react'
import { View, Text, Button } from 'react-native'
import Header from '../NavBar/Header'

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Home</Text>
        </View>
    )
}

export default Home
