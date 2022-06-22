import * as React from 'react';
import {ImageBackground, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";
import { Button } from '@rneui/base';
import image from '../../assets/lawyer.png'




export const ClientCard = ()=>{

    const styles = {
        card: {
            width: '80%',
            height: 120,
            borderRadius: 10,
            flexDirection: 'row',
            borderWidth: 1/2,
            elevation: 10,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10
        }
    }


    return (
        <TouchableOpacity style={styles.card}>
            <View style={{width: "40%", height: '100%', backgroundColor: 'white'}}>
                <ImageBackground imageStyle={{borderRadius: 5}} source={image} style={{height: '100%',width: '100%'}} resizeMode='cover'>

                </ImageBackground>

            </View>
            <View style={{width: '60%', height: '100%'}}>
                <View style={{width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: '100%', width: '70%', borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text h4 h4Style={{fontWeight: '600', fontSize: 20}}>
                            Achraf Esraidi
                        </Text>
                    </View>
                </View>

                <View style={{width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button size='sm' containerStyle={{width: '45%', height: '90%', marginTop: 7, marginLeft: 7, borderRadius: 5}} type='solid' color='#f44336'>
                        Reject
                    </Button>
                    <Button size='sm' containerStyle={{width: '45%', height: '90%', marginTop: 7, marginRight: 7, borderRadius: 5}} type='solid' color='#66bb6a'>
                        Accept
                    </Button>


                </View>

            </View>

        </TouchableOpacity>
    )
}