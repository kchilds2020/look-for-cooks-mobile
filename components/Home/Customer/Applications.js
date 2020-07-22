import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {View, Text} from 'react-native'
import {Application} from '../HomeStyles'

function Applications({element, postID}) {
    const [fullname,setFullname] = useState('');
    const [visibility,setVisibility] = useState(false);


    useEffect(() => {
        const getCook = async () => {
            try{
            let response = await axios.get(`https://lookforcooks.com/api/get/username/${element}`)
            setFullname(`${response.data.firstName} ${response.data.lastName}`)
            }catch(error){console.log(error)}
        }
        getCook()

    }, [element.cook])


    const cancelItem = (event) => {
        event.preventDefault();
        setVisibility(false)
    }

    const rejectCook = async () => {
        try{
            console.log('rejecting cook')
            let res = await axios.post('https://lookforcooks.com/api/post/reject-cook', {username: element, postID: postID})
            alert(res.data)
            window.location.href = '/home'
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>

            <Application>
                <Text>{fullname}</Text>
            </Application>
            {/* <ApplicationContainer id = {`app-${listKey}`}>
                <LinkToProfile href ={`/user/profile?user=${cook}`}>{fullname === '' ? <Spinner animation="border" variant='info'/> : fullname}</LinkToProfile>

            <div style={{padding: '10px', width: '260px'}}>
                { hired === cook ? <Button variant="outline-info" style={{marginLeft: '5px', float: 'right'}} onClick={() => history.push(`/user/profile?user=${cook}`)}> Contact </Button>  :
                <>
                    <Button variant="outline-primary" style={{marginLeft: '5px'}} onClick={() => setVisibility(true)}>
                        Book
                    </Button>
                    <Button variant="outline-info" style={{marginLeft: '5px'}} onClick={() => history.push(`/user/profile?user=${cook}`)}>
                        Contact
                    </Button>
                    <Button variant="outline-danger" style={{marginLeft: '5px'}} onClick={rejectCook}>
                        Reject
                    </Button> 
                </>
                }
            </div>
                
                {visibility === true ? <Confirm message={`Are you sure you want to book ${cook}?`} cancel={cancelItem} confirm={bookItem} /> : <></>}
                {visibility === true ? <><Book eventID={postID} chef={cook} eventTitle={summary} peopleAmount={peopleAmount} pricePerPerson={pricePerPerson} cancel={cancelItem} setVisibility={setVisibility}/><Overlay setVisibility={setVisibility}/></> : <></>}
            </ApplicationContainer> */}
        </>
    )
}

export default Applications
