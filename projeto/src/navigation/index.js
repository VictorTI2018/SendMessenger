import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from '../views/FormLogin'
import FormCadastro from '../views/FormCadastro'
import BoasVindas from '../views/BoasVindas'
import Home from '../views/Home'

export default function Navigation(props) {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#03A9F4', color: '#FFF'}}>
            <Stack key="root">
                <Scene  key="login" component={FormLogin} title="Login" initial />
                <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
                <Scene key="boasVindas" component={BoasVindas} title="Bem Vindo" />
                <Scene key="home" component={Home} title="Dashboard" />
            </Stack>
        </Router>
    )
}