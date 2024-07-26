import React, { useState, useRef , useEffect } from 'react';
import styled from 'styled-components/native';
import { Camera  , CameraType} from "expo-camera";
import { TouchableOpacity } from 'react-native';


const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`

export const CameraScreen = () => {
    const [hasPermisson, setHasPermisson ] = useState(null);
    const cameraRef = useRef();


    const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

    useEffect(() => {
        (async () => {
            const { status} = await Camera.requestCameraPermissionsAsync();
            setHasPermisson(status === 'granted');
        })() 
    }, [])

    

    return (
        <TouchableOpacity onPress={snap}>
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={CameraType.front}
          ratio={"16:9"}
         />
         </TouchableOpacity>
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