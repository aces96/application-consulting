import * as React from 'react';
import { View, ImageBackground } from "react-native";
import image from '../../../assets/lawyer.png'
import { Text } from "@rneui/themed";



export const LawyerImage = ()=>{

    const styles = {
        container: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(28,109,208, 0.7)',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,

        }
    }

    return(
        <View style={styles.container}>
            <ImageBackground imageStyle={{borderBottomLeftRadius: 70, borderBottomRightRadius: 70}} source={image} style={{height: 400,width: '100%', justifyContent: 'flex-end'}} resizeMode='cover'>
            </ImageBackground>
            <View style={{width:'100%', height: 55, justifyContent: 'center', alignItems: 'center'}}>
                <Text h3>Achraf Esraidi</Text>
            </View>
        </View>
    )
}