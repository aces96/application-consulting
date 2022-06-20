import * as React from 'react';
import {View} from 'react-native'
import { Text } from '@rneui/themed'



export const LawyerDescription = ()=>{

    const styles = {
        container:{
            width: '90%',
            alignItems: 'center',
            elevation: 3,
            marginTop: 10,
            marginBottom: 40,
        }
    }

    return (
        <View style={styles.container}>
            <View style={{width: '100%', paddingLeft: 15, marginBottom: 15,marginTop: 10, alignItems: 'center'}}>
                <Text h4>Description : </Text>
            </View>
            <View style={{width: '100%',paddingLeft: 15, paddingRight: 15, fontWeight: '600', alignItems: 'center', marginBottom: 10}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                    djkqfLFJHQSKDJFDSFKJDHSKQJSDVBQMJQIZOERIAEFQSDVNQSKNVSJDFNVLSDNVMFGSDGSDSDJDFJKSDKJFSDJD
                </Text>

            </View>




        </View>
    )
}