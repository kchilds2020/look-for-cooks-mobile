import React,{useContext} from 'react'
import { View, Text, Button } from 'react-native'
import Header from '../NavBar/Header'
import {UserContext} from '../UserContext'
import styled from 'styled-components'
import Account from './Cook/Account'
import CustomerOrders from './Customer/CustomerOrders'
import JobPosts from './Customer/JobPosts'

const Home = ({navigation}) => {

    let {user} = useContext(UserContext)

    return (
        <View>
            <Header navigation={navigation}/>
            <HomeGreeting><GreetingText>Hello {user.firstName}!</GreetingText></HomeGreeting>
            {user.cook ? (
                <>
                    <Account user={user}/> 
                </>
            ) : (
                <>
                    <CustomerOrders username={user.username}/>
                    <JobPosts username={user.username}/>
                </>
            )}
        </View>
    )
}

export default Home


const HomeGreeting = styled.View`
    background-color: white;
    display: flex;
    align-items: center;
    width: 95%;
    padding: 10px;
    margin: 10px auto;
    border-radius: 8px;
`;

const GreetingText = styled.Text`
    font-size: 24px;
`;