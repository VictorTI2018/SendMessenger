import axios from 'axios'
import storeConfig from '../store/index'


const store = storeConfig()

const http = axios.create({
    baseURL: 'http://192.168.42.51:8000'
})

http.interceptors.request.use((config) => {
    const { auth } = store.getState()
    const { token } = auth
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, error => {
    Promise.reject(error)
})

export default http