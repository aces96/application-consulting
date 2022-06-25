import * as React from 'react';
import {  ScrollView } from "react-native"
import { ClientCard } from '../components/lawyer.home.components/clientCard';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDemandesByLawyer, getOneLawyer } from '../assets/helpers/helpers';
import { addDemandes } from '../assets/redux/slices/demande.slice';
import { LawyerValidationModal } from '../components/lawyer.home.components/modal';




export const LawyerHome = ()=>{
    const dispatch = useDispatch()
    const demandes = useSelector(state=>state.DemandeReducer.demande)
    const email = useSelector(state=>state.LawyerEmailReducer.email)
    const [icon,setIcon] = useState()
    const [iconColor,setIconColor] = useState()
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = ('')



    const styles = {
        container: {
            width: '100%',
            alignItems: 'center'
        }
    }

    useEffect(()=>{
        const getDemandes =  async (email)=>{
            const lawyer =  await getOneLawyer({email: email})
            const Demandes =  await getDemandesByLawyer({avocatId: lawyer.data.lawyer._id})
            await dispatch(addDemandes(Demandes.data.demandes))
            console.log(Demandes.data.demandes);

        }


        const newDemandes = getDemandes(email)
        
    }, [])

    const hideModal = () => setVisible(false);

    const handleReject = ()=>{
        setIcon('check-circle-outline')
        setIconColor('red')
        setMessage('you want delete')

        setVisible(true)


    }

    const handleAccept =  ()=>{
        setIcon('not-interested')
        setIconColor('green')
        setMessage('you want accept')
        setVisible(true)


    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {demandes.map(e=>{
                    return (
                        <ClientCard handleAccept={handleAccept} handleReject={handleReject} name={e.clientId.fullName} />
                    )                
            })}

            <LawyerValidationModal message={message} hideModal={hideModal} visible={visible} iconColor={iconColor} icon={icon}/>
        </ScrollView>
    )
}