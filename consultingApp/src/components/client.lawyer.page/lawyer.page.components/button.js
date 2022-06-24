import * as React from 'react';
import { View } from "react-native";
import { Button } from "@rneui/base";   
import { SubmitButton, PendingButton } from "../../auth.components/buttons";




export const OrderButton = (props)=>{

    const styles ={
        container: {
            width: '100%',
            height: 55,
            alignItems: 'center'
        }
    }

    handleButton = ()=>{
        if(props.state == 'pending'){
            return <PendingButton  title='invitation sent'/>
        }else {
            return <Button loading={props.loading} onPress={props.handleSubmit} containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title='Demande' color='#4B7BE5' size="md"/>
        }
    }


    return (
        <View style={styles.container}>
            {handleButton()}

        </View>

    )
}