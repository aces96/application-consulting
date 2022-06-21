import * as React from 'react';
import { View } from "react-native";
import { LoginTitle } from "../components/auth.components/title";
import {INPUT} from '../components/auth.components/input'
import { Text } from "@rneui/themed";
import { SubmitButton } from "../components/auth.components/buttons";
import { useState } from 'react';
import HelpersController from '../assets/helpers/helpers';
import { UserCheckBox } from '../components/auth.components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';








export const LoginForm = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [clientToggle, setClientToggle] = useState(false)
    const [avocatToggle, setAvocatToggle] = useState(false)

    const Styles = {
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center'
        }
    }

    const handlePassword = (text)=>{
        setPassword(text)
        console.log(email);
    }
    const handleEmail = (text)=>{
        setEmail(text)
        console.log(email);
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

    const handleSubmit = ()=>{
        const helper = new HelpersController
        const payload = {
            email: email,
            password: password,
            role: role
        }
        const user = Api.Login(payload)

        const storage = helper.storeData(email,{
            email: email,
            token: user.token
        })


    }

    return (
        <View style={Styles.container}>
            <LoginTitle />
            <INPUT handleChange={handleEmail} type='email' error={false} placeholder='enter your email'/>
            <INPUT handleChange={handlePassword} error={false} secure= {true} placeholder='enter your password'/>
            <View style={{width: '80%', justifyContent: 'space-between', marginBottom: 10, flexDirection: 'row'}}>
                <UserCheckBox handleToggle={handleAvocatToggle} Toggle= {avocatToggle} title='avocat'/>
                <UserCheckBox handleToggle={handleClientToggle} Toggle= {clientToggle} title='client' />
            </View>
            <View style={{width: '90%', alignItems: 'flex-end', marginBottom: 30}}>
                <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>forgot password!</Text>
            </View>
            <SubmitButton handleSubmit={handleSubmit} title='Submit' />
            <View style={{width: '90%', alignItems: 'center'}}>
                <Text>don't have account ?</Text>
                <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>Registre now</Text>
            </View>
        </View>
    )
}