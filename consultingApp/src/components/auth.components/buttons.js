import * as React from 'react';
import { Button } from "@rneui/base";
import GoogleIcon from '../../assets/google.svg'
import { useEffect } from 'react';





export const SubmitButton = (props)=>{


 

    return (
        <Button loading={props.loading} onPress={props.handleSubmit} containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title={props.title} color='#4B7BE5' size="md"/>
    )
}
export const SignInButton = (props)=>{


 

    return (
        <Button loading={props.loading} onPress={props.handleSubmit} containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title={props.title} color='#4B7BE5' size="md"/>
    )
}


export const PendingButton = (props)=>{
    return (
        <Button  containerStyle={{width: '80%', marginBottom:20,  elevation: 10, borderWidth: 1, borderColor: '#4B7BE5'}} title={props.title}  size="md" disabled/>

    )
}



export const GoogleButton = ()=>{

    return (
        <Button  color='#DFDFDE' containerStyle={{width: '80%', height: 45, justifyContent: 'center', borderRadius: 10, elevation: 10   }}>
            <GoogleIcon width={45}   height={45}/>
        </Button>
    )
}