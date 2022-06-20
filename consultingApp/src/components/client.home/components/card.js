import * as React from 'react';
import {ImageBackground, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";
import image from '../../../assets/lawyer.png'
import { useState } from "react";
import Collapsible from 'react-native-collapsible';
import {CardButton} from './buttons'




export const Card = ()=>{

    let [isCollapsed, setisCollapsed] = useState(true)

    const styles = {
        container : {
            width: '80%',
            backgroundColor: 'black',
            borderRadius: 40,
            elevation: 10,
            marginBottom: 20
        }
    }

    return(

        <TouchableOpacity onPress={()=>{setisCollapsed(!isCollapsed)}}   style={styles.container}>
            <View style={{width: '100%', height: 150, borderRadius: 40, marginBottom: 8}}>
                <ImageBackground source={image} imageStyle={{borderRadius: 40}} style={{height: '100%',width: '100%'}} resizeMode='cover'>
                </ImageBackground>
            </View>
            <Text  style={{color: 'white', textAlign: 'center', fontWeight: "700", marginBottom: 10}}>Harvey Specter</Text>
            <Collapsible duration={100} style={{width: "100%", backgroundColor: 'white', borderRadius: 40,alignItems: "center"}} collapsed={isCollapsed}>
                <Text style={{color: 'black', textAlign: 'center', fontWeight: "700", marginBottom: 10}}>
                    Description:
                </Text>

                <Text style={{textAlign: 'center', marginBottom: 10}}>
                    lorem20lfhdjfhlqjdshfqkljsdvkqbsdkljvqmsdjnvkjqbsdkbqklsdf
                    hgslkdhfksljhdfkjhsldjhlskdljkfhskjdfhljksdhf
                </Text>
                <CardButton />
            </Collapsible>
            

        </TouchableOpacity>

    )
}