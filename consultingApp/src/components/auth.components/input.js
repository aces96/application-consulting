import * as React from 'react'
import { Input } from "@rneui/themed";
import { View, Text } from "react-native";
import { CheckBox } from '@ui-kitten/components';


export const INPUT = (props)=>{

    return (
        <Input onChangeText={(text)=>props.handleChange(text, props.type)} renderErrorMessage={props.error} inputStyle={{paddingHorizontal: 0, paddingVertical: 0}} inputContainerStyle={{width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: '#041562', height: 50, padding: 8, borderRadius: 10,marginVertical: 5}}	secureTextEntry={props.secure}  placeholder={props.placeholder}/>
    )
}

export const UserCheckBox = (props)=>{


    return (
        <CheckBox
        checked={props.Toggle}
        onChange={props.handleToggle}>
        {props.title}
      </CheckBox>
    )

}