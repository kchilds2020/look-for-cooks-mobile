import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import {CookPhoto} from './CookStyles'
import distanceBetween from '../utilities/distanceBetween'

const Cook = ({element, user, navigation}) => {
    return (
        <View>
            <CookPhoto source={{uri: `https://lookforcooks.com/api/get/image/${element.picture}`}} />
            <Text>{element.firstName} {element.lastName}</Text>
            <Text>{element.cookPrice}</Text>
            <Text>{element.cookDescription}</Text>
            <Text>{distanceBetween(element.latitude, element.longitude, user.latitude, user.longitude).toFixed(0)}</Text>
            <Button title="Click Me" onPress = {() => navigation.navigate('Menu')}/>

        </View>
    )
}

export default Cook
