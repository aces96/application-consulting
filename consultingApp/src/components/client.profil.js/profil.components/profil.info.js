import * as React from 'react';
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import image from '../../../assets/lawyer.png'





export const InfoSection = ()=>{


    const styles = {
        container: {
            width: '100%', 
            alignItems: 'center',
            backgroundColor: 'white'
        }
    }




    return (
        <View style={styles.container}>
            <View style={{width: '70%', height: 50, borderBottomLeftRadius: 90, borderBottomRightRadius: 90, backgroundColor: '#185ADB', alignItems: 'center', justifyContent: 'center', marginBottom: 10, elevation: 10}}>
                <Text h4 h4Style={{fontWeight: '600', color: 'white'}}>
                    Demandes : 
                </Text>
            </View>
            <TouchableOpacity style={{width: '95%', height: 100, flexDirection: 'row', borderWidth: 1, borderRadius: 10, elevation: 10, backgroundColor: 'white', marginBottom: 10}}>
                <View style={{width: '30%', height: '100%'}}>
                    <ImageBackground source={image} imageStyle={{borderRadius: 120, borderColor: 'black'}} style={{height: '99%',width: '99%'}} resizeMode='cover'>
                    </ImageBackground>
                </View>
                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text h4 h4Style={{fontWeight: '600', fontSize: 20}}>
                        Harvey Specter
                    </Text>

                </View>
                <View style={{width: '30%',}}>
                    <View style={{width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Status</Text>
                    </View>
                    <View style={{width: '100%', height: '70%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 20}}>Pending</Text>
                    </View>

                </View>


            </TouchableOpacity>

        </View>
    )
}