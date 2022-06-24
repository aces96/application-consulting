import * as React from 'react';
import { View } from "react-native";
import { Icon, Text } from "@rneui/themed";
import { PropsService } from '@ui-kitten/components/devsupport';





export const TarifSection = (props)=>{



    const styles={
        container: {
            width: '100%', 
            height: 150,
            alignItems: 'center',
        }
    }



    return (
        <View style={styles.container}>
            <View style={{width: '100%',height: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{width: "40%", height: "100%", alignItems: 'center',borderColor: '#1C6DD0', borderWidth: 1, borderRadius: 30, backgroundColor: 'white', elevation: 10, marginLeft: 10}}>
                    <Icon color='#1C6DD0' size={40} name="schedule" type="material" containerStyle={{position: 'absolute', marginTop: -20}} />
                    <View style={{width: '100%', marginTop: 30, alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 8}}>
                            30MIN
                        </Text>
                    </View>
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Text style={{fontSize: 25  , fontWeight: '700', marginBottom: 10}}>
                            {props.secondPrice}
                        </Text>
                    </View>
                </View>
                <View style={{width: "40%", height: "100%", alignItems: 'center',borderColor: '#1C6DD0', borderWidth: 1, borderRadius: 30, backgroundColor: 'white', elevation: 10, marginRight: 10}}>
                    <Icon color='#1C6DD0' size={40} name="schedule" type="material" containerStyle={{position: 'absolute', marginTop: -20}}/>
                    <View style={{width: '100%', marginTop: 30, alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 8}}>
                            60MIN
                        </Text>
                    </View>
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Text style={{fontSize: 25  , fontWeight: '700', marginBottom: 10}}>
                            200DH
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )

}