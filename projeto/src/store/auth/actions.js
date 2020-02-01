import { MODIFICA_EMAIL, MODIFICA_PASSWORD, MODIFICA_USERNAME, IS_LOGGED, IS_TOKEN } from './types'

export const modificaEmail = email => {
    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaPassword = password => {
    return {
        type: MODIFICA_PASSWORD,
        payload: password
    }
}

export const modificaUsername = username => {
    return {
        type: MODIFICA_USERNAME,
        payload: username
    }
}

export const login = user => {
    return dispatch => ({
        type: IS_LOGGED,
        payload: user
    })
}

