import * as React from 'react';
import { ScrollView } from "react-native";
import {ProfilHeader} from "../components/client.profil.js/profil.components/header"
import {InfoSection} from '../components/client.profil.js/profil.components/profil.info'



export const Profil = ()=>{

    const styles = {
        container:{
        }
    }


    return (
        <ScrollView style={styles.container}>
            <ProfilHeader/>
            <InfoSection/>

        </ScrollView>

    )
}