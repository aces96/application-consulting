import * as React from 'react';
import { View } from "react-native";
import { RegistreTitle } from "../components/auth.components/title";
import {INPUT} from '../components/auth.components/input'
import { Text } from "@rneui/themed";
import { SubmitButton, GoogleButton } from "../components/auth.components/buttons";
import { UserCheckBox } from "../components/auth.components/input";
import { useState } from 'react';





export const  SignUpForm = ()=>{
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [role, setRole]= useState('')
    const [clientToggle, setClientToggle] = useState(false)
    const [avocatToggle, setAvocatToggle] = useState(false)

    const Styles = {
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center'
        }
    }
    handleFullName = (text)=>{
        setFullName(text)
        console.log(fullName);
    }
    handlEmail = (text)=>{
        setEmail(text)
        console.log(email);

    }
    handlePassword = (text)=>{
        setPassword(text)
        console.log(password);

    }
    handleConfirmPass = (text)=>{
        setConfirmPass(text)
        console.log(confirmPass);

    }

    const handleClientToggle = ()=>{
        setClientToggle(true)
        setAvocatToggle(false)
        setRole('client')

    }
    const handleAvocatToggle = ()=>{
        setClientToggle(false)
        setAvocatToggle(true)
        setRole('avocat')
    }
    return(
        <View style={Styles.container}>
            <RegistreTitle/>
            <INPUT handleChange={handleFullName} error={false} placeholder='enter fullname'/>
            <INPUT handleChange={handlEmail} error={false} placeholder='enter email'/>
            <INPUT handleChange={handlePassword} error={false} placeholder='enter password'/>
            <INPUT handleChange={handleConfirmPass} error={false} placeholder='confirm password'/>
            <View style={{width: '80%', justifyContent: 'space-between', marginBottom: 10, flexDirection: 'row'}}>
                <UserCheckBox handleToggle={handleAvocatToggle} Toggle= {avocatToggle} title='avocat'/>
                <UserCheckBox handleToggle={handleClientToggle} Toggle= {clientToggle} title='client' />
            </View>
            <Button containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title='Submit' color='#4B7BE5' size="md"/>
            <Text style={{marginBottom: 10}}>continue with!</Text>
            <GoogleButton/>

        </View>

    )
}