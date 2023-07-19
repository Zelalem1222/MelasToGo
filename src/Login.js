import React, { useState } from "react";

import { StyleSheet , View , Text, TextInput, ActivityIndicator, Button, Alert } from "react-native";
import { FIREBASE_AUTH } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [loading , setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
          setLoading(true);
          try {
            const response = await signInWithEmailAndPassword(auth , email , password);
            console.log(response)
          } catch(error) {
            alert("Sign In failed" + error.message);
            console.log(error)
          } finally {
            setLoading(false)
          }
    }

    const signUp = async () => {
        setLoading(true);
        try {
          const response = await createUserWithEmailAndPassword(auth , email , password);
          alert("Check your email" + error.message);
          console.log(response)
        } catch(error) {
           console.log(error);
           alert("Sign In failed" + error.message);
        } finally {
          setLoading(false)
        }
  }

    return (
     <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" 
         value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
       
        />
        <TextInput style={styles.input} placeholder="Password"  autoCapitalize="none" secureTextEntry={true} onChangeText={(text) => setPassword(text)}  value={password} />
        { loading ? <ActivityIndicator size='large' color='#0000ff'  /> :
        <>
        <Button title="Login" onPress={signIn} />
        <Button title="Sign up" onPress={signUp} />
        </> 
    }
       
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input: {
        height: 40,
        marginVertical: 4,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white'
    } 
})