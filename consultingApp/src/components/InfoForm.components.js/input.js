import * as React from 'react';
import { View } from 'react-native';
import { Input } from "@rneui/themed";
import { Text } from '@rneui/themed';





export const DescriptionInput = (props)=>{


    return (
        <View style={{width: '100%', height: 200, alignItems: 'center', marginTop: 30}}>
            <Text h4 h4Style={{fontWeight: '600',marginBottom: 10, fontFamily: 'Oswald-Light'}}>
                Description:
            </Text>
            <Input onChangeText={(text)=>props.handleChangeDes(text)} placeholder='Add your description .......' inputContainerStyle={{width: '100%', height: 150, marginTop: 0, backgroundColor: 'white', borderWidth: 1}}  />
        </View>
    )
}