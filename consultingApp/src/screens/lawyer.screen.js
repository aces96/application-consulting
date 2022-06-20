import * as React from 'react';
import { View, ScrollView } from "react-native";
import {TopTab} from '../components/client.lawyer.page/lawyer.page.components/toptab'
import { LawyerImage } from "../components/client.lawyer.page/lawyer.page.components/image";
import { LawyerDescription } from "../components/client.lawyer.page/lawyer.page.components/description";
import  {TarifSection} from '../components/client.lawyer.page/lawyer.page.components/tarif'
import {OrderButton} from '../components/client.lawyer.page/lawyer.page.components/button'


export const LawyerPage = ()=>{

        const styles = {
            container: {
                alignItems: 'center'
                }
        }
        

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TopTab />
                <LawyerImage/>
                <LawyerDescription/>
                <TarifSection/>
                <OrderButton/>

            </ScrollView>
        )
}