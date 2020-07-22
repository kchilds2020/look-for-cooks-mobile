import React, {useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import axios from 'axios'
import CustomerOrder from './CustomerOrder'
import {Header, HeaderText, NumColorDark, Section, MenuButton, ButtonText} from './HomeStyles'

function CustomerOrders({username}) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getCustomerOrders = async () => {
            try{
            let response = await axios.get(`https://lookforcooks.com/api/get/customer-orders/${username}`)
            setOrders(response.data)
            }catch(error){console.log(error)}
        }
        getCustomerOrders()
     },[username])


 
    return (
        <>
        <Section>
            <Header><HeaderText><NumColorDark>{orders.length}</NumColorDark> Open Orders</HeaderText></Header> 
                {orders.length > 0 ? orders.map((element, index) => 
                <CustomerOrder key = {index} pending={element.pending} completed = {element.completed} title={element.menuItemTitle} qty={element.qty} orderID = {element._id} chef={element.chefUsername}/>) : <></>} 
                    
        </Section>
        <MenuButton><ButtonText>Find Food Near Me</ButtonText></MenuButton>
        </>
        
    )
}

export default CustomerOrders