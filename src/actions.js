import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_MECHS_PENDING,
  REQUEST_MECHS_SUCCESS,
  REQUEST_MECHS_FAILED
} from './constants.js';

export const setSearchField = (text) => (
  { 
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
);

export const requestMechs = () => (dispatch) => {
  dispatch({ type: REQUEST_MECHS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then( resp => resp.json())
    .then(data => dispatch({ type: REQUEST_MECHS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_MECHS_FAILED, payload: err }));
}

