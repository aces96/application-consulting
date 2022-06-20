import * as React from 'react';
import { View, ImageBackground } from "react-native";
import { Text } from "@rneui/themed";
import image from '../../../assets/user.jpg'




export const ProfilHeader= ()=>{


    const styles = {
        container: {
            width: '100%',
            height: 550,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10
        }
    }



    return (
        <View style={styles.container}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white', marginBottom: 10}}>
                <ImageBackground source={image}  style={{height: '100%',width: '100%'}} resizeMode='cover' >
                    <View style={{width: '100%', height: 50}}>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}