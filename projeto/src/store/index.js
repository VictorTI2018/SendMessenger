import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import authReducer from './auth/reducers'

const reducers = combineReducers({
    auth: authReducer
});

const storeConfig = () => {
    return createStore(reducers, {}, applyMiddleware(ReduxThunk))
}

export default storeConfig