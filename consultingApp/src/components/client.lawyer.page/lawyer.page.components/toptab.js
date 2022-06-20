import * as React from 'react';
import { View } from "react-native";
import {  Icon } from '@rneui/themed';
import { Button } from "@rneui/base";


export  const TopTab = ()=>{

    const styles = {
        container: {
            width: '100%',
            height: 60,
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#DFDFDE'
        }
    }

    return(
        <View style={styles.container}>
            <Button   type="clear">
            <Icon size={36}  name="arrow-back" type="material" />
                BACK
            </Button>
        </View>
    )
}