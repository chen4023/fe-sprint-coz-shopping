import {createStore,combineReducers } from 'redux';

import bookMarkReducer from './reducers/reducers'

const rootReducer = combineReducers({
    bookMarkReducer
});

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const store = createStore( rootReducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
