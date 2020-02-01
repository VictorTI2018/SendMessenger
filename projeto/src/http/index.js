import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const http = axios.create({
    baseURL: 'http://192.168.42.51:8000'
})

http.interceptors.request.use((config) => {
    const token = AsyncStorage.getItem('token')
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, error => {
    Promise.reject(error)
})

export default http