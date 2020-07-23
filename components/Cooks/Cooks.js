import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../NavBar/Header'
import distanceBetween from '../utilities/distanceBetween'
import {UserContext} from '../UserContext'
import axios from 'axios'
import Cook from './Cook'

const Cooks = ({navigation}) => {

    let {user} = useContext(UserContext)
    console.log('COOKS USER CONTEXT', user)

    const [cooksArray, setCooksArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState('');

    useEffect(() => {
        const getCooks = async () => {
            try {
                let response = await axios.get('https://lookforcooks.com/api/get/cooks')
                console.log('RESPONSE COOKSSSSS: ', response.data)
                if(user && user.latitude !== 0 && user.longitude !==0){
                    response.data.sort((a,b)=>{
                        let aDistance = distanceBetween(a.latitude,a.longitude,user.latitude,user.longitude)
                        let bDistance = distanceBetween(b.latitude,b.longitude,user.latitude,user.longitude)
                        return aDistance - bDistance
                    })
                }
                setLoading(false)
                
                setCooksArray(response.data.slice(0,10))
                setError('');
            } catch (error) {
                setLoading(false)
                setCooksArray([])
                setError('Something went wrong!');
            }           
        }
        getCooks()
        
        
    },[user])

    
    return (
        <>
            <Header navigation={navigation}/>
            <View>
                {cooksArray.length > 0 ? cooksArray.map((element,index) => <Cook key={index} element={element} user={user} navigation={navigation}/>) : <></>}
            </View>
        </>
    )
}

export default Cooks

const styles = StyleSheet.create({})
