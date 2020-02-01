import React, { useEffect } from 'react'
import {  StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import Navigation from './navigation/index'
import firebase from 'firebase'

import storeConfig from './store'

const store = storeConfig()

export default function App(props) {

    function loadFirebase() {
        var firebaseConfig = {
            apiKey: "AIzaSyB7uz5jz0ErtMEDvsfNfUeHYTedTV4eYfc",
            authDomain: "sendmessager-a3947.firebaseapp.com",
            databaseURL: "https://sendmessager-a3947.firebaseio.com",
            projectId: "sendmessager-a3947",
            storageBucket: "sendmessager-a3947.appspot.com",
            messagingSenderId: "501722934504",
            appId: "1:501722934504:web:d9bcb839a4df9e4b862d5d",
            measurementId: "G-6RMZ19EGEP"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    useEffect(() => {
        loadFirebase()
    }, [])

    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#222" barStyle="light-content" />
            <Navigation />
            <FlashMessage position="bottom" />
        </Provider>
    )
}