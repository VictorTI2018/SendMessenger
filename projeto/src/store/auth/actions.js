import { IS_LOGGED, IS_LOGOUT, IS_TOKEN } from './types'

export const login = user => {
    return dispatch => ({
        type: IS_LOGGED,
        payload: user
    })
}

export const setToken = token => {

    return dispatch => ({
        type: IS_TOKEN,
        payload: token
    })
}

export const logout = () => {
    return {
        type: IS_LOGOUT
    }
}