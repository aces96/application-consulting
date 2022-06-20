import * as React from 'react';
import { View,PermissionsAndroid } from "react-native";
// import { io } from "socket.io-client";
import  {useState, useRef, useEffect} from 'react'
import {
	ScreenCapturePickerView,
	RTCPeerConnection,
	RTCIceCandidate,
	RTCSessionDescription,
	RTCView,
	MediaStream,
	MediaStreamTrack,
	mediaDevices,
	registerGlobals,
    permissions
} from 'react-native-webrtc';



// const Socket = io.connect("http://localhost:6667")





export const VideoScreen= ()=>{
    const [permissions , setPermission] = useState('')


    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    const styles = {
        container: {
            height: '90%',
            width: '100%',
            backgroundColor: 'black'
        }
    }

        useEffect(()=>{
            console.log('here');

            const getPermissions = async ()=>{
                try {
                        const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: "Cool Photo App Camera Permission",
                            message:
                            "Cool Photo App needs access to your camera " +
                            "so you can take awesome pictures.",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                        );
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log("You can use the camera");
                        } else {
                        console.log("Camera permission denied");
                        }
                    } catch (err) {
                        console.warn(err);
                    }
                };
                getPermissions()

                console.log('here2');

                const getMediaStream = async ()=>{
                    
                    let mediaConstraints = {
                        audio: true,
                        video: {
                            frameRate: 30,
                            facingMode: 'user'
                        }
                    }
                    let localMediaStream;
                    let isVoiceOnly = false;
                    
                    try {
                        const mediaStream = await mediaDevices.getDisplayMedia();
                    
                        localMediaStream = mediaStream;
                        console.log(localMediaStream);
                    } catch( err ) {
                        console.log(err);
                    };
                }


            getMediaStream()
        },[])


    return (
        <View style={styles.container}>
            <View style={{height: '50%', width: '100%', backgroundColor: 'white'}}>

            </View>
            <View style={{height: '50%', width: '100%', backgroundColor: 'gray'}}>

            </View>
        </View>

    )
}