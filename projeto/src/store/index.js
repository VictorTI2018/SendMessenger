import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import usuarioReducer from './usuario/reducers'
import authReducer from './auth/reducers'

const reducers = combineReducers({
    usuario: usuarioReducer,
    auth: authReducer
});

const storeConfig = () => {
    return createStore(reducers, {}, applyMiddleware(ReduxThunk))
}

export default storeConfig