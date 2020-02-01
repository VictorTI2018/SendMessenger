import { MODIFICA_EMAIL, MODIFICA_PASSWORD, MODIFICA_USERNAME, IS_LOGGED, CLEAR_DATA } from './types'

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



export const clearData = model => {
    return {
        type: CLEAR_DATA,
        payload: model
    }
}
