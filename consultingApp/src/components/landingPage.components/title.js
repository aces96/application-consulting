import * as React from 'react';
import { Text } from '@rneui/themed';
import { View } from 'react-native';





export const TopTitle = ()=>{

    const Styles = {
        container: {
            width: '100%',
            alignItems: 'center',
            marginTop: 60
        }
    }
        return(
            <View style={Styles.container}>
                <Text h2 h2Style={{fontFamily: 'Oswald-Bold', fontWeight: "500"}}>
                    Expert lawyers
                </Text>
                <Text h4 h4Style={{ fontWeight: "normal", color: '#041562', marginBottom: 30}} >
                    the experience your case need
                </Text>

            </View>
            

        )
    
}


export const BottomTitle = ()=>{
        const Styles = {
            container: {
                width: '100%',
                alignItems: 'center',
                marginTop: 60
            }
        }
        return(
            <View style={Styles.container}>
                <Text h4 h4Style={{ fontWeight: "normal", color: '#041562'}} >
                    Direct Consultation
                </Text>
                <Text h4 h4Style={{ fontWeight: "normal", color: '#041562', marginBottom: 20}} >
                    Services
                </Text>

            </View>
            

        )
    
}