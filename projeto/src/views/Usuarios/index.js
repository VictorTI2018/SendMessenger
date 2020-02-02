import React, { useEffect, useState } from 'react'
import { View, Image, Dimensions, Text, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import { Button } from 'react-native-elements'

import { addContatos } from '../../webservice/contatos'
import { getUsuarios } from '../../webservice/usuarios'

const horizontalMargin = 20;
const slideWidth = 260;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

import styles from './styles'



function Usuarios(props) {

    const { user } = props.user

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(false)

    async function loadUsuarios() {
        try {
            setLoading(true)
            const resp = await getUsuarios()
            setUsuarios(resp.data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadUsuarios()
    }, [])

    function renderTitle() {
        return (
            <View style={styles.containerTitle}>
                <View >
                    <Image source={require("../../assets/img/pessoa.jpeg")} style={{ height: 100, width: 100, borderRadius: 10 }} />
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'center' }}>
                    <Text>{user.username}</Text>
                    <Text>Online</Text>
                    <Text>Total de Amigos: 10</Text>
                </View>

            </View>
        )
    }

    function _renderItem({ item, index }) {
        return (
            <View style={styles.containerItem}>
                <View style={{ alignItems: 'center', paddingTop: 30 }}>
                    <Image source={require("../../assets/img/pessoa.jpeg")} style={{ height: 150, width: 150, borderRadius: 10 }} />
                    <Text style={{ marginTop: 10, fontSize: 20 }}>{item.username}</Text>
                </View>
                <Button title="Adicionar" onPress={() => false} />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>

            {renderTitle()}
            <Text style={styles.title}>Aqui Estão algumas sugestão de amizade</Text>
            <View >
                {loading ? <ActivityIndicator size="large" color="#03A9F4" /> :
                    <Carousel
                        data={usuarios}
                        renderItem={_renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                }

            </View>

        </ScrollView>
    );
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth
    }
}

export default connect(mapStateToProps, null)(Usuarios)