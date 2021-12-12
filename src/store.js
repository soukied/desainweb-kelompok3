import {createStore} from 'redux';
import data from './data';

const initialState = data; 

const Type = {
    TAMBAH: 0,
    HAPUS: 1,
    UBAH: 2
}

let reducer = (state = initialState, {type, value}) => {
    switch (type) {
        case Type.TAMBAH:
            return {...state, ...value};
        case Type.UBAH:
            return value;
        case Type.HAPUS:
            let temp = {...state};
            delete temp[value];
            return temp;
        default:
            return state; 
    }
}

export {Type};

export default createStore(reducer);