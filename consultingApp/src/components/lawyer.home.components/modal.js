import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { Button } from "@rneui/base";
import {Text, Icon} from '@rneui/themed'
import { View } from 'react-native';


export const LawyerValidationModal = (props) => {

const containerStyle = {backgroundColor: 'white', padding: 20,alignItems: 'center', width: '80%', alignSelf: 'center'};

return (
    <Provider>
    <Portal>
        <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={containerStyle}>
        <View style={{width: '100%', height: 80, alignItems: 'center', justifyContent: 'center'}}>
            <Icon size={60} color={props.iconColor} name={props.icon} type='material'/>
        </View>
        <Text h4>Are you sure !</Text>
        <Text h4 h4Style={{fontWeight: '600', textAlign: 'center', marginTop: 5, fontSize: 15, marginBottom: 15}}>{props.message}</Text>
        <Button containerStyle={{width: 200, borderRadius: 7}} onPress={props.handlePress}>Send</Button>
        </Modal>
    </Portal>
    </Provider>
);
};