import {
    CHANGE_SEARCH_FIELD,
    REQUEST_MUTANTS_PENDING,
    REQUEST_MUTANTS_SUCCESS,
    REQUEST_MUTANTS_FAILED
} from './constants.js';

const initialStateSearch = {
    searchfield: ''
}

export const searchMutants = (state = initialStateSearch, action = {}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchfield: action.payload});
        default:
            return state;
    }
}

const initialStateMutants = {
    isPending: false,
    mutants: [],
    error: ''
}

export const requestMutants = (state = initialStateMutants, action={}) =>{
    switch(action.type){
        case REQUEST_MUTANTS_PENDING:
            return Object.assign({}, state, {isPending: false})
        case REQUEST_MUTANTS_SUCCESS:
            return Object.assign({}, state, {mutants: action.payload, isPending: false})
        case REQUEST_MUTANTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}