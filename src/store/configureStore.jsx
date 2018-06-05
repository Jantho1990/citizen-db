import { compose, combineReducers, createStore } from 'redux'

import {
    submitDataReducer as submitData
} from './../reducers/reducers'

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        submitData
    })

    const store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}