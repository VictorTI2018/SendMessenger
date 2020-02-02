import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

function Contatos(props) {

    return (
        <View>
            <Text>Contatos</Text>
        </View>
    )
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth
    }
}

export default connect(mapStateToProps, null)(Contatos)