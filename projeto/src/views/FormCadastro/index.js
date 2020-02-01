import React from 'react'
import { View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaPassword, modificaUsername } from '../../store/usuario/actions'
import { Button, Card } from 'react-native-elements'
import { TextField } from '../../components'

import { cadastrar } from '../../webservice/cadastrar'

import styles from './styles'

function FormCadastro(props) {

    function getModel() {
        return {
            username: props.username,
            email: props.email,
            password: props.password
        }
    }

    async function handleSubmit() {
        const resp = await cadastrar(getModel())
        console.log(resp.data)
    }

    return (
        <ImageBackground source={require("../../assets/img/bg.jpeg")} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextField placeholder="Username..."
                        value={props.username}
                        onChangeText={(username) => props.modificaUsername(username)} />
                    <TextField placeholder="E-mail..."
                        value={props.email}
                        onChangeText={(email) => props.modificaEmail(email)} />
                    <TextField placeholder="Senha..."
                        value={props.password}
                        onChangeText={(password) => props.modificaPassword(password)}
                        secureTextEntry={true} />
                </View>
                <View>
                    <Button title="Cadastrar" onPress={handleSubmit} />
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = ({ usuario }) => {
    return {
        username: auth.username,
        email: auth.email,
        password: auth.password
    }
}

export default connect(mapStateToProps, { modificaUsername, modificaEmail, modificaPassword })(FormCadastro)