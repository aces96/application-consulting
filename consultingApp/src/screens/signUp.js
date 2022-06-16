import * as React from 'react';
import { View } from "react-native";
import { RegistreTitle } from "../components/auth.components/title";
import {INPUT} from '../components/auth.components/input'
import { Text } from "@rneui/themed";
import { SubmitButton, GoogleButton } from "../components/auth.components/buttons";
import { UserCheckBox } from "../components/auth.components/input";





export const  SignUpForm = ()=>{

    const Styles = {
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center'
        }
    }

    return(
        <View style={Styles.container}>
            <RegistreTitle/>
            <INPUT error={false} placeholder='enter fullname'/>
            <INPUT error={false} placeholder='enter email'/>
            <INPUT error={false} placeholder='enter password'/>
            <INPUT error={false} placeholder='confirm password'/>
            <View style={{width: '80%', justifyContent: 'space-between', marginBottom: 10, flexDirection: 'row'}}>
                <UserCheckBox title='avocat'/>
                <UserCheckBox title='client' />
            </View>
            <SubmitButton title='Submit'/>
            <Text style={{marginBottom: 10}}>continue with!</Text>
            <GoogleButton/>

        </View>

    )
}