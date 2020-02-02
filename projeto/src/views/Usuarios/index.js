import React, { useRef } from 'react'
import { View, Image, Dimensions, Text, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Button } from 'react-native-elements'

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

import styles from './styles'

const usuarios = [
    { id_usuario: 1, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 2, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 3, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 4, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 5, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 6, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") },
    { id_usuario: 7, username: 'Victor Hugo', imagem: require("../../assets/img/pessoa.jpeg") }
]

export default function Usuarios(props) {

    function renderTitle() {
        return (
            <View style={styles.containerTitle}>
                <View >
                    <Image source={require("../../assets/img/pessoa.jpeg")} style={{ height: 100, width: 100, borderRadius: 10 }} />
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'center' }}>
                    <Text>Victor Hugo</Text>
                    <Text>Online</Text>
                    <Text>Total de Amigos: 10</Text>
                </View>

            </View>
        )
    }

    function _renderItem({ item, index }) {
        return (
            <View style={{ borderWidth: 1, height: 350, padding: 10 }}>
                <View style={{ alignItems: 'center', paddingTop: 30 }}>
                    <Image source={item.imagem} style={{ height: 200, width: 200, borderRadius: 10 }} />
                    <Text style={{ marginTop: 10, fontSize: 20 }}>{item.username}</Text>
                </View>
                <Button title="Adicionar" onPress={() => false} />
            </View>
        );
    }

    return (
        <View style={styles.container}>

            {renderTitle()}
            <Text style={styles.title}>Aqui Estão algumas sugestão de amizade</Text>
            <View >
                <Carousel
                    data={usuarios}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>

        </View>
    );
}