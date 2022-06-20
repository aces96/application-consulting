import * as React from 'react';
import { View } from "react-native";
import {Button} from '@rneui/base'
import { Icon } from "@rneui/themed";




export const ButtonsBar = ()=>{

        const styles = {
            container : {
                height: '9%',
                width: '100%',
                backgroundColor: 'white',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
            }
        }

    return(
        <View style={styles.container}>
            <View style= {{width: '80%', height: '90%', borderRadius: 10}}>
                <Button containerStyle={{borderRadius: 10}}  color="error">
                    <Icon size={30} name="call" color='white'/>
                </Button>
            </View>


        </View>

    )
}