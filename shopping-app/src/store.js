import {createStore,combineReducers } from 'redux';

import bookMarkReducer from './reducers/reducers'

const rootReducer = combineReducers({
    bookMarkReducer
});
const store = createStore( rootReducer);

export default store;
