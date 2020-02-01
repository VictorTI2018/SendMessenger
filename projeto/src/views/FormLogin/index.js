import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaPassword } from '../../store/usuario/actions'
import { login } from '../../store/auth/actions'
import { Button } from 'react-native-elements'
import { TextField } from '../../components'
import { Actions } from 'react-native-router-flux'

import { logar } from '../../webservice/login'

import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'

function FormLogin(props) {

    function cadastrar() {
        Actions.push('cadastro')
    }
    console.log(props)

    function getModel() {
        return {
            email: props.email,
            password: props.password
        }
    }

    async function handleSubmit() {
        const resp = await logar(getModel())
        const token = resp.data.token
        const user = resp.data.user
        if (token && user) {
            props.login(user)
            await AsyncStorage.setItem('token', token)
        }

    }
    console.log(props.email)
    return (
        <ImageBackground source={require("../../assets/img/bg.jpeg")} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextField placeholder="E-mail..."
                        value={props.email}
                        onChangeText={(email) => props.modificaEmail(email)} />
                    <TextField placeholder="Senha..."
                        value={props.password}
                        onChangeText={(password) => props.modificaPassword(password)}
                        secureTextEntry={true} />
                    <TouchableOpacity onPress={cadastrar}>
                        <Text style={styles.link}>Ainda não tem cadastro? Cadastra-se</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={handleSubmit} title="Entrar" />
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = ({ usuario }) => {

    return {
        email: usuario.email,
        password: usuario.password
    }
}

export default connect(mapStateToProps, { modificaEmail, modificaPassword, login })(FormLogin)