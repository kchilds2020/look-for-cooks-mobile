import React, {useState} from 'react'
import Applications from './Applications';
import {View, Text, Button} from 'react-native'
import {Header, HeaderText, NumColorDark, Section, MenuButton, ButtonText, JobPost, SubHeaderText} from '../HomeStyles'


function HomeJobPost({element}) {

    const [visibility, setVisibility] = useState(false)

    /* const toggleApplicants = (e) => {
        e.preventDefault()

        visibility ? setVisibility(false) : setVisibility(true)
    }
 */
    return (
        <>
            <JobPost>
                <HeaderText>{element.summary}</HeaderText>
                <SubHeaderText>{element.applications.length} Applications</SubHeaderText>
            </JobPost>
            {element.applications.length > 0 ? element.applications.map((user, index) => 
                    <Applications key={index} element={user} postID={element._id}/>) : <></>}
        </>
    )
}

export default HomeJobPost
