import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from '../views/FormLogin'
import FormCadastro from '../views/FormCadastro'

export default function Navigation(props) {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={FormLogin} title="Login" />
                <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
            </Stack>
        </Router>
    )
}