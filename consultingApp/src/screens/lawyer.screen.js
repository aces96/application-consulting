import * as React from 'react';
import { View, ScrollView } from "react-native";
import {TopTab} from '../components/client.lawyer.page/lawyer.page.components/toptab'
import { LawyerImage } from "../components/client.lawyer.page/lawyer.page.components/image";
import { LawyerDescription } from "../components/client.lawyer.page/lawyer.page.components/description";
import  {TarifSection} from '../components/client.lawyer.page/lawyer.page.components/tarif'
import {OrderButton} from '../components/client.lawyer.page/lawyer.page.components/button'
import {ValidationModal} from '../components/client.lawyer.page/lawyer.page.components/modal'
import { sendDemande, getData } from '../assets/helpers/helpers';
import { useSelector } from 'react-redux';
import { useState } from 'react';


export const LawyerPage = ({navigation})=>{

    const [lawyer, setLawyer] = useState(useSelector(state=>state.LawyerReducer.lawyerInfo))
    const [clientEmail, setClientEmail] = useState(useSelector(state=>state.ClientInfoReducer.email))
    const [visible, setVisible] = useState(false)
    const [state, setState] = useState('')

    



        const styles = {
            container: {
                alignItems: 'center'
                }
        }

        const handleSubmit = ()=>{
            setVisible(true)
        }

        const hideModal = () => setVisible(false);

        const handlePress = async ()=>{
            console.log(clientEmail);

            const data = await getData(clientEmail)

            const payload = {
                avocatId: lawyer[0]._id
            }

            const demande = await sendDemande(payload, JSON.parse(data).token)
            console.log(demande);
            setState('pending')
            navigation.navigate('clienthome')

        }
        

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TopTab />
                <LawyerImage image={lawyer[0].image} name={lawyer[0].fullName}/>
                <LawyerDescription descr={lawyer[0].description} />
                <TarifSection firstPrice={lawyer[0].pricing.firstPrice} secondPrice={lawyer[0].pricing.secondPrice}  />
                <OrderButton state={state} handleSubmit={handleSubmit}/>
                <ValidationModal lawyer={lawyer[0].fullName} handlePress={handlePress} hideModal={hideModal} visible={visible}/>

            </ScrollView>
        )
}