import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import image from '../../assets/lawyer.png'
import {Button} from '@rneui/base'
import {Icon} from '@rneui/themed'





export const InfoFormImage = (props)=>{

    const styles = {
        container: {
            width: '100%',
            height: 150,
            alignItems: 'center'
        }
    }




    return (
        <View style={styles.container}>
            <View style={{width: 150, height: 150, borderRadius: 150/2, alignItems: 'center'}}>
                <ImageBackground style={{height: '100%', width: '100%'}} imageStyle={{borderRadius: 150/2}}   source={image} resizeMode='cover'>
                </ImageBackground>
                <View style={{height: 40, width: 100, alignItems: 'flex-end', marginBottom:10 }}>
                    <Button onPress={props.handleClick} type="solid" style={{height:'100%',width:"100%"}} containerStyle={{width: 32, height: 32, borderRadius: 35/2, marginTop: -30,}} color= 'grey' >
                    <Icon  size={16} name="edit" color="white" />
                    </Button>

                </View>


            </View>

        </View>
    )
}