import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-elements'
import styles from './styles'

export default function BoasVindas(props) {


    function logar() {
        Actions.push('login')
    }

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/img/bg.jpeg')}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Seja Bem-Vindo!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Fazer Login" onPress={logar}/>
                </View>
            </View>
        </ImageBackground>

    )
}