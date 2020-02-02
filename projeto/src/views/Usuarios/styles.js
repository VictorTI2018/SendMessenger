import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30
    },

    containerTitle: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 20,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 50,
        backgroundColor: '#FFF'
    },
    title : {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#000'
    },

    containerItem: {
        borderRadius: 20, 
        height: 300, 
        padding: 10, 
        backgroundColor: '#FFF'
    }
})