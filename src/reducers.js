import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
    searchfield: ''
}

export const searchMutants = (state = initialState, action = {}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchfield: action.payload});
        default:
            return state;
    }
}