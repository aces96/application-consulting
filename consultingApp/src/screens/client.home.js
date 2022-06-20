import * as React from 'react';
import { Card } from "../components/client.home/components/card"
import {  ScrollView } from "react-native"




export const ClientHome = ()=>{

    const styles = {
        container: {
            width: '100%',
            alignItems: 'center'
        }
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
        

    )
}