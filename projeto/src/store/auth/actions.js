import { IS_LOGGED, IS_LOGOUT } from './types'

export const login = user => {
    return dispatch => ({
        type: IS_LOGGED,
        payload: user
    })
}

export const logout = () => {
    return {
        type: IS_LOGOUT
    }
}