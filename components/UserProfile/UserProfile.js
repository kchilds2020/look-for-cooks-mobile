import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

const UserProfile = ({navigation, username}) => {

    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        const getUserInfo = async () => {
            try{
                const response = await axios.get(`https://lookforcooks.com/api/get/username/${username}`)
                setUserInfo(response.data)
            }catch(error){console.log(error)}
        }
        getUserInfo()
    }, [])

    return (
        <View>
            <Text>{userInfo.firstName} {userInfo.lastName}</Text>
        </View>
    )
}

export default UserProfile
