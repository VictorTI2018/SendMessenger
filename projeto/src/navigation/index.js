import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from '../views/FormLogin'
import FormCadastro from '../views/FormCadastro'
import BoasVindas from '../views/BoasVindas'

export default function Navigation(props) {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={FormLogin} title="Login" initial />
                <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
                <Scene key="boasVindas" component={BoasVindas} title="Bem Vindo" />
            </Stack>
        </Router>
    )
}