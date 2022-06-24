import * as React from 'react';
import { Card } from "../components/client.home/components/card"
import {  ScrollView } from "react-native"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setLawyerInfo} from '../assets/redux/slices/lawyers.slice'





export const ClientHome = ({navigation})=>{
    const dispatch = useDispatch()

    const [lawyers, setLawyers] = useState(useSelector(state=>state.LawyerReducer.lawyers))
    

    const styles = {
        container: {
            width: '100%',
            alignItems: 'center'
        }
    }



    const handleclick = ()=>{
        const dis = dispatch(setLawyerInfo(lawyers))
        navigation.navigate('lawyerInfo')
    }








    return (
        <ScrollView contentContainerStyle={styles.container}>
            {lawyers.map((e)=>{
                return (

                    <Card handleclick={()=>handleclick()}  uri={e.image} descr={e.description} name={e.fullName} />
                )
                

            })}
            

        </ScrollView>
        

    )
}