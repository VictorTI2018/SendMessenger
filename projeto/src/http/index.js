import axios from 'axios'
import storeConfig from '../store/index'
import AsyncStorage from '@react-native-community/async-storage'


const store = storeConfig()

const http = axios.create({
    baseURL: 'http://192.168.42.51:8000'
})

http.interceptors.request.use( async (config) => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, error => {
    Promise.reject(error)
})

export default http