import React, {useState, useEffect, useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../NavBar/Header'
import axios from 'axios'
import {UserContext} from '../UserContext'
import distanceBetween from '../utilities/distanceBetween'
import MenuItem from './MenuItem'

const Menu = ({navigation}) => {

    let {user} = useContext(UserContext)
    console.log('MENU USER CONTEXT', user)

    const [menuArray, setMenuArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState('');
     
    useEffect(() => {
        const getMenu = async () => {
            try{
                let response = await axios.get('https://lookforcooks.com/api/get/menu')
                console.log('RESPNSE', response)
                if(user && user.latitude !== 0 && user.longitude !==0){
                    response.data.sort((a,b)=>{
                        let aDistance = distanceBetween(parseFloat(a.latitude),parseFloat(a.longitude),user.latitude,user.longitude)
                        let bDistance = distanceBetween(parseFloat(b.latitude),parseFloat(b.longitude),user.latitude,user.longitude)
                        return aDistance - bDistance
                    })
                }
                setLoading(false)
                setMenuArray(response.data.slice(0,10))
                setError('');
            }catch(error){
                setLoading(false)
                setMenuArray([])
                setError('Something went wrong!');
            }
        }
        getMenu()
    },[user])

    return (
        <View>
            <Header navigation={navigation}/>
            {menuArray.length > 0 ? menuArray.map((element, index) => <MenuItem key={index} element={element} user={user}/>) : <></>}
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})
