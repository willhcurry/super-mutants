import {
    CHANGE_SEARCH_FIELD,
    REQUEST_MUTANTS_PENDING,
    REQUEST_MUTANTS_SUCCESS,
    REQUEST_MUTANTS_FAILED
} from './constants.js';

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestMutants = () =>(dispatch) =>{
    dispatch({type: REQUEST_MUTANTS_PENDING});
    fetch('https://my-json-server.typicode.com/willhcurry/mutants/mutants')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_MUTANTS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_MUTANTS_FAILED, payload: error }))
}
