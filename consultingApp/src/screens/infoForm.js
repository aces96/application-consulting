import * as React from 'react';
import { View } from 'react-native';
import { InfoFormImage } from '../components/InfoForm.components.js/image';
import { DescriptionInput } from '../components/InfoForm.components.js/input';
import { Pricing } from '../components/InfoForm.components.js/pricing';
import { InfoFormButton } from '../components/InfoForm.components.js/buttons';
import { Text } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux'
import {updateUser} from '../assets/helpers/helpers';




export const InfoForm = ({navigation})=>{
    let email=  useSelector(state=>state.LawyerEmailReducer.email)


   

    const [firstPrice, setFirstPrice] = useState('')
    const [secondPrice, setSecondPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const styles = {
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        }
    } 

    








    const handleChangeDes = (text)=>{
        setDescription(text)
        console.log(description);


    }

    const handleClick = async ()=>{

        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);
        setImage(result.assets[0].uri)
    }

    const handleFirstPrice = (text)=>{
        setFirstPrice(text)
        console.log(firstPrice);

        
    }

    const handleSecondPrice = (text)=>{
        setSecondPrice(text)
        console.log(secondPrice);


    }

    const handleSubmit = ()=>{
        console.log(email);
        const payload = {
            description:  description,
            image: image,
            firstPrice: firstPrice,
            secondPrice: secondPrice,
            email: email
    }

        const user = updateUser(payload)

        navigation.navigate('lawyerHome')

    }

    return(
        <View style={styles.container}>
            <Text h4 h4Style={{marginBottom: 10, marginTop: 10}}>
                Complete your Informations :
            </Text>

            <InfoFormImage handleClick= {()=>handleClick()}/>
            <Pricing handleFirstPrice={(text)=>handleFirstPrice(text)} handleSecondPrice={(text)=>handleSecondPrice(text)}/>
            <DescriptionInput handleChangeDes={(text)=>handleChangeDes(text)}/>
            <InfoFormButton handleSubmit={handleSubmit}/>


        </View>
    )
}