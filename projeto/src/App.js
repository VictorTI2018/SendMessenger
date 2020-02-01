import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Navigation from './navigation/index'

import storeConfig from './store'

const store = storeConfig()

export default function App(props) {

    return (
        <Provider store={store}>
        <StatusBar backgroundColor="#222" barStyle="light-content"  />
            <Navigation />
        </Provider>
    )
}