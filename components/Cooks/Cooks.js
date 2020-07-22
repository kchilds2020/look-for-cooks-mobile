import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../NavBar/Header'

const Cooks = ({navigation}) => {
    
    return (
        <>
            <Header navigation={navigation}/>
            <View>
                <Text>Cooks</Text>
            </View>
        </>
    )
}

export default Cooks

const styles = StyleSheet.create({})
