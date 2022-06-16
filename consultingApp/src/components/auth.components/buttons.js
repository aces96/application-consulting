import * as React from 'react';
import { Button } from "@rneui/base";
import GoogleIcon from '../../assets/google.svg'






export const SubmitButton = (props)=>{
 

    return (
        <Button containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title={props.title} color='#4B7BE5' size="md"/>
    )
}



export const GoogleButton = ()=>{

    return (
        <Button  color='#DFDFDE' containerStyle={{width: '80%', height: 45, justifyContent: 'center', borderRadius: 10, elevation: 10   }}>
            <GoogleIcon width={45}   height={45}/>
        </Button>
    )
}