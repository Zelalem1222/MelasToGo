import React from 'react';
import { View, Text , StyleSheet , Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../firebase';




export default function List({navigation} ){
    return(
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Details')} title='Open Details' />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logut' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})