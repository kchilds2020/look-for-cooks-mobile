import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PrivateRoute = (props) => {

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}

export default PrivateRoute

const styles = StyleSheet.create({})
