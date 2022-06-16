import * as React from 'react';
import { Text } from "@rneui/themed";
import { View } from "react-native";




export const LoginTitle = ()=>{
        const Styles = {
            container: {
                width: '100%',
                alignItems: 'center',
                marginTop: 60
            }
        }

        return (
            <View style={Styles.container}>
                <Text h2 h2Style={{fontFamily: 'Oswald-Bold', fontWeight: "400"}}>
                    Hello Again!
                </Text>
                <Text h4 h4Style={{ fontWeight: "normal", color: '#041562'}}>
                    Welcome back you've
                </Text>
                <Text h4 h4Style={{fontWeight: "normal", marginBottom: 50,color: '#041562'}}>
                    Been missed!
                </Text>
            </View>
        )

}





export const RegistreTitle = ()=>{
        const Styles = {
            container: {
                width: '100%',
                alignItems: 'center',
                marginTop: 30
            }
        }

    return (
        <View style={Styles.container}>
            <Text h2 h2Style={{fontFamily: 'Oswald-Bold', fontWeight: "400", marginBottom: 5}}>
                Registre
            </Text>
            <Text h4 h4Style={{ fontWeight: "normal", color: '#041562'}}>
                Welcome
            </Text>
            <Text h4 h4Style={{fontWeight: "normal",color: '#041562', marginBottom: 20}}>
                Registre and meet with the best
            </Text>
        </View>

    )

}