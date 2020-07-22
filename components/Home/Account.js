import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Account({user}) {

    const [accountBalance, setAccountBalance] = useState(0)
    const [pendingBalance, setPendingBalance] = useState(0)
    const [isLoading, setLoading] = useState(true) 

    useEffect(() => {

        const getAccountInfo = async () => {
            try{
                let response = await axios.get(`https://lookforcooks.com/api/get/account-balance/${user._id}`)
                console.log('ACCOUNT RESPONSE', response)
                setAccountBalance(response.data.available[0].amount)
                setPendingBalance(response.data.pending[0].amount)
                setLoading(false)
            }catch(error){
                console.log(error)
            }
        }
         getAccountInfo()

    },[user])

    return (
    <>
        <Text>{pendingBalance}</Text>
    </>
    )
}

export default Account
