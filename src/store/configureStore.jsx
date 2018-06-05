import { compose, combineReducers, createStore } from 'redux'

import {
    dataViewReducer as dataViews
} from './../reducers/reducers'

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        dataViews
    })

    const store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}