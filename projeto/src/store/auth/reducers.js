import {  IS_LOGOUT, IS_LOGGED, IS_TOKEN } from './types'

const initialState = {
    user: {},
    token: null
}

const reducer = (state = initialState, action)  => {
    switch(action.type) {
        case IS_LOGGED:
            return {
                ...state,
                user: action.payload
            }

        case IS_TOKEN:
            return {
                ...state,
                token: action.payload
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