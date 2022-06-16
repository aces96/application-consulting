import * as React from 'react';
import {LandingPageSvg} from '../components/landingPage.components/SvgImage'
import { TopTitle, BottomTitle } from '../components/landingPage.components/title'
import {SubmitButton} from '../components/auth.components/buttons'
import { View } from 'react-native'





export const LandingPage = ()=>{


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
                <SubmitButton title='START NOW'/>
            </View>


    )
}