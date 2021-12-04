import {createStore} from 'redux';
import data from './data';

const initialState = data; 

const Type = {
    TAMBAH: 1,
    HAPUS: 2
}

let reducer = (state = initialState, {type, value}) => {
    switch (type) {
        case Type.TAMBAH:
            return {...state, ...value};
        case Type.HAPUS:
            let temp = {...state};
            delete temp[value];
            return temp;
        default:
            return state; 
    }
}

export default createStore(reducer);