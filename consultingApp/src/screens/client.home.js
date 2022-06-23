import * as React from 'react';
import { Card } from "../components/client.home/components/card"
import {  ScrollView } from "react-native"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';





export const ClientHome = ()=>{
    const data = useSelector(state=>state.LawyerReducer.lawyers)

    const [lawyers, setLawyers] = useState(data)

    const styles = {
        container: {
            width: '100%',
            alignItems: 'center'
        }
    }


    console.log(data);








    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
        

    )
}