import { MODIFICA_PASSWORD, MODIFICA_EMAIL, MODIFICA_USERNAME, IS_LOGGED } from './types'
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
        case IS_LOGGED:
            return action.payload

        default:
            return state
    }

}

export default reducer