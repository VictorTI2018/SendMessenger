import * as React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Usuarios from '../../views/Usuarios'
import Contatos from '../../views/Contatos'
import Conversas from '../../views/Conversas'


const initialLayout = { width: Dimensions.get('window').width };

export function Tab(props) {
    const FirstRoute = () => (
        <ImageBackground style={styles.scene} source={require("../../assets/img/img.jpg")}>
            <Usuarios {...props} />
        </ImageBackground>
    )
    const SecondRoute = () => (
        <ImageBackground style={styles.scene}
            source={require("../../assets/img/img.jpg")}>
            <Contatos {...props} />
        </ImageBackground>
    );

    const ThirdRoute = () => (
        <ImageBackground style={styles.scene} source={require("../../assets/img/img.jpg")}>
            <Conversas {...props} />
        </ImageBackground>
    );


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Usuarios' },
        { key: 'second', title: 'Contatos' },
        { key: 'third', title: 'Conversas' }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    return (
        <TabView

            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});