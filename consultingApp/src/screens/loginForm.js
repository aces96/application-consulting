import * as React from 'react';
import { View } from "react-native";
import { LoginTitle } from "../components/auth.components/title";
import {INPUT} from '../components/auth.components/input'
import { Text } from "@rneui/themed";
import { SubmitButton } from "../components/auth.components/buttons";








export const LoginForm = ()=>{

    const Styles = {
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center'
        }
    }

    return (
        <View style={Styles.container}>
            <LoginTitle />
            <INPUT error={false} placeholder='enter your email'/>
            <INPUT error={false} secure= {true} placeholder='enter your password'/>
            <View style={{width: '90%', alignItems: 'flex-end', marginBottom: 30}}>
                <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>forgot password!</Text>
            </View>
            <SubmitButton title='Submit' />
            <View style={{width: '90%', alignItems: 'center'}}>
                <Text>don't have account ?</Text>
                <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>Registre now</Text>
            </View>
        </View>
    )
}