import * as React from 'react';
import { View, ImageBackground } from "react-native";
import image from '../assets/lawyer.png'
import {Button} from '@rneui/base'
import { Icon , Text} from "@rneui/themed";




export const callWaiting = ()=>{

    const styles = {
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'black'
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={{height: '100%',width: '100%', opacity: 0.5}} resizeMode='cover'>
                <View style={{width: '100%', height: '86%', alignItems: 'center'}}>
                    <Text h2  h2Style={{color: 'white', fontWeight: '600', marginTop: 70}}>
                        Achraf Esraidi
                    </Text>

                    <Text h4 h4Style={{color: 'white', fontWeight: '600', marginTop: 10}}>
                        appel en cours...
                    </Text>


                </View>
                <View style={{height: '14%', width: '100%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                    <Button containerStyle={{borderRadius: 10,height: '95%', width: '80%'}}   color="error">
                        <Icon size={30} name="call" color='white'/>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}