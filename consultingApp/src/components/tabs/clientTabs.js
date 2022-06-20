import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ClientHome} from '../../screens/client.home'
import { Profil } from '../../screens/profil';
import { Icon } from '@rneui/themed';
import { useState } from 'react';


const Tab = createBottomTabNavigator();

export const ClientTabs= () => {

    const [tabBarShowLabel, settabBarShowLabel]= useState(false) 
    return (
            <Tab.Navigator   screenOptions={{headerShown: false}}>
                <Tab.Screen  options={{tabBarIcon:({color,size})=>(<Icon name='home' type='font'/>), tabBarShowLabel}}  name="clientHome" component={ClientHome} />
                <Tab.Screen  options={{tabBarIcon:({color,size})=>(<Icon name='person' type='material'/>), tabBarShowLabel}}  name="clientProfil" component={Profil} />
            </Tab.Navigator>
        
    );
}