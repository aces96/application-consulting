import * as React from 'react';
import { View } from "react-native";
import { SubmitButton } from "../../auth.components/buttons";




export const OrderButton = ()=>{

    const styles ={
        container: {
            width: '100%',
            height: 55,
            alignItems: 'center'
        }
    }


    return (
        <View style={styles.container}>
            <SubmitButton title='DEMANDE'/>

        </View>

    )
}