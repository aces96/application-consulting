import * as React from 'react';
import {  ScrollView } from "react-native"
import { ClientCard } from '../components/lawyer.home.components/clientCard';



export const LawyerHome = ()=>{
    const styles = {
        container: {
            width: '100%',
            alignItems: 'center'
        }
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>

        </ScrollView>
    )
}