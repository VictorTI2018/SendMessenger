import { MODIFICA_PASSWORD, MODIFICA_EMAIL, MODIFICA_USERNAME, CLEAR_DATA } from './types'
const initialState = {
    username: null,
    email: null,
    password: null,
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MODIFICA_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case MODIFICA_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case MODIFICA_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CLEAR_DATA:
            return {
                ...initialState
            }

        default:
            return state
    }

}

export default reducer