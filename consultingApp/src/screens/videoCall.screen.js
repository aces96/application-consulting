import * as React from 'react';
import { View } from "react-native";
import { ButtonsBar } from "../components/videoCall/videoCall.components/buttonsBar";
import { VideoScreen } from "../components/videoCall/videoCall.components/videoScreen";





export const VideoCall = ()=>{
    const styles = {
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: 'grey'
        }
    }


    return (
        <View style={styles.container}>
            <VideoScreen/>
            <ButtonsBar/>
        </View>
    )
}