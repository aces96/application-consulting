import * as React from 'react';
import { View } from 'react-native';
import { Input, Text } from "@rneui/themed";




export const Pricing = (props)=>{

    const styles = {
        container: {
            width: '100%',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40
        }
    }



    return (
        <View style={styles.container}>
            <Text h4 h4Style={{fontWeight: '600',fontFamily: 'Oswald-Light', marginBottom: 5}}>
                Pricing:
            </Text>
            <View style={{height: '60%', width: '100%',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Input onChangeText={(text)=>props.handleFirstPrice(text)} label='30MIN' placeholder='200DH'  containerStyle={{width: '45%', height: '100%'}}/>

                <Input onChangeText={(text)=>props.handleSecondPrice(text)} label='60MIN' placeholder='250DH' containerStyle={{width: '45%', height: '100%'}}/>

            </View>
        </View>
    )
}