import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './styles'

export function TextField(props) {

    return (
        <View>
            <TextInput {...props} style={styles.input} />
        </View>
    )
}