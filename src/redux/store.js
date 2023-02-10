import { createStore } from 'redux'
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//tao store
const store=createStore(rootReducer,
    composeWithDevTools()
    );
//createStore(rootReducer , initvalue , enhancers)
//initValue la state dc dat
// enhancers la midware nhuw redux saga, redux thunk


export default store;