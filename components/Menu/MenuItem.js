import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import { MenuPhoto } from './MenuStyles';
import axios from 'axios'
import distanceBetween from '../utilities/distanceBetween'

const MenuItem = ({element, user}) => {

    const [visible, setVisibility] = useState(false);
    const [reviewAvg, setReviewAvg] = useState(0)
    const [distance, setDistance] = useState(0)
    const [long, setLong] = useState(0) 
    const [lat, setLat] = useState(0)
    const [pic,getPic] = useState('')

    useEffect(() => {
        const getChef = async () =>{

            try {
                let response = await axios.get(`https://lookforcooks.com/api/get/username/${element.username}`)
                console.log('element.chefUsername', response)
                let reviewArray = response.data.reviews
                console.log('RESPOSNE', response.data)
                if(reviewArray){
                    let sum = 0;
                    for(let i = 0; i < reviewArray.length; i++){
                        sum += parseFloat(reviewArray[i].rating)
                    }
                    console.log('REVIEW AVG: ', sum/reviewArray.length)
                    setReviewAvg(sum/reviewArray.length)
                }else{
                    setReviewAvg(0)
                }

                //get distance
                if(user && user.latitude !== 0){
                    let dist = distanceBetween(user.latitude, user.longitude, response.data.latitude , response.data.longitude)
                    setDistance(dist)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getChef()
    }, [element.chefUsername, user])

    const orderItem = (event) =>{
        event.preventDefault();
        console.log('order!')
        setVisibility(true);
    }

    
    return (
        <View>
            <MenuPhoto source = {{uri: `https://lookforcooks.com/api/get/image/${element.picture}`}}/>
            <Text>{element.title}</Text>
            <Text>{element.rating === '' ? 'No Rating' : element.rating}</Text>
            <Text>{element.description}</Text>
            <Text>{element.price}</Text>
            <Text>{distance.toFixed(0)}</Text>
        </View>
    )
}

export default MenuItem
