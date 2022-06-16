import * as React from 'react'
import { useState } from 'react';
import { Input } from "@rneui/themed";
import { View, Text } from "react-native";
import { CheckBox } from '@ui-kitten/components';


export const INPUT = (props)=>{

    return (
        <Input renderErrorMessage={props.error} inputStyle={{paddingHorizontal: 0, paddingVertical: 0}} inputContainerStyle={{width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: '#041562', height: 50, padding: 8, borderRadius: 10,marginVertical: 5}}	secureTextEntry={props.secure}  placeholder={props.placeholder}/>
    )
}

export const UserCheckBox = (props)=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    return (
        <CheckBox
        checked={toggleCheckBox}
        onChange={() => setToggleCheckBox(!toggleCheckBox)}>
        {props.title}
      </CheckBox>
    )

}