import * as React from 'react';
import {LandingPageSvg} from '../components/landingPage.components/SvgImage'
import { TopTitle, BottomTitle } from '../components/landingPage.components/title'
import { View } from 'react-native'
import { Button } from "@rneui/base";






export const LandingPage = ({navigation})=>{


    const styles = {
        container: {
            flex: 1,
            alignItems:'center',
            width: '100%'
        }
    }

    return (
            <View style={styles.container}>
                <TopTitle/>
                <LandingPageSvg/>
                <BottomTitle/>
                <Button onPress={()=>navigation.navigate('login')} containerStyle={{width: '80%', marginBottom:20,  elevation: 10}} title='start now' color='#4B7BE5' size="md"/>
            </View>


    )
}