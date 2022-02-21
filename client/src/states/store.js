import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducer/allReducers'
import thunk from "redux-thunk"

export const store = createStore(allReducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))