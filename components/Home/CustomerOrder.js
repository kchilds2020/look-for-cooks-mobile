import React, {useState} from 'react'
import axios from 'axios'
import {View,Text, Button} from 'react-native'
import {CustomerOrderItem, SectionLeft, SectionRight, DeliveredButton, ButtonText, HeaderText, SubHeaderText, OrderItemNum} from './HomeStyles'

function CustomerOrder({title, qty, pending, completed, orderID, chef}) {
    const [isPending, setPending] = useState(pending)



    const confirmDelivery = async(event) => {
        event.preventDefault()

        try{
            await axios.post('https://lookforcooks.com/api/post/update-pending-order', {orderID: orderID})
            setPending(false)
        }catch(error){
            console.log(error)
        }
     }

     

    return (
        <CustomerOrderItem>
            <SectionLeft>
                <HeaderText><OrderItemNum>{qty}</OrderItemNum> {title}</HeaderText>
                <SubHeaderText>{chef}</SubHeaderText>
            </SectionLeft>
            <SectionRight>
                {completed ? <DeliveredButton><ButtonText>Delivered</ButtonText></DeliveredButton> : <Text>On Its Way!</Text>}
            </SectionRight>
        </CustomerOrderItem>
    )
}

export default CustomerOrder
