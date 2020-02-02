import { IS_LOGOUT, IS_LOGGED  } from './types'

const initialState = {
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGGED:
            return {
                ...state,
                user: {
                    id_usuario: action.payload.id_usuario,
                    username: action.payload.username,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        case IS_LOGOUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default reducer