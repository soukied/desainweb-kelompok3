import {createStore} from 'redux';
import data from './data';

const initialState = data; 

let reducer = (state = initialState, action) => {
    return state;
}

export default createStore(reducer);