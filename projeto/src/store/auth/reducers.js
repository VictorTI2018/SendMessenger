import {  IS_LOGOUT, IS_LOGGED } from './types'

const initialState = {
    user: {}
}

const reducer = (state = initialState, action)  => {
    switch(action.type) {
        case IS_LOGGED:
            return  action.payload

        case IS_LOGOUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}