import React, { useState, useRef , useEffect , useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styled from 'styled-components/native';
import { Camera  , CameraType} from "expo-camera";
import { TouchableOpacity , View } from 'react-native';
import { Text } from "../../../components/typography/typography.component"


import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex:1;
`

const InnerSnap = styled.View`
    width: 100%;
    height: 100%;
    z-index: 999;
`

export const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission ] = useState(null);
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext)

    const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo` , photo.uri)
      navigation.goBack();
    }
  };

    useEffect(() => {
        (async () => {
            const { status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })() 
    }, [])

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
        
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={CameraType.front}
          ratio={"16:9"}
         >
          <TouchableOpacity onPress={snap}>
         <InnerSnap />
         </TouchableOpacity>
         </ProfileCamera>
    )
}





// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export const  CameraScreen = ()=> {{
//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   const toggleCameraFacing = ()=> {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   message: {
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });