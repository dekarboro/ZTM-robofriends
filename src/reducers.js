import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_MECHS_PENDING,
  REQUEST_MECHS_SUCCESS,
  REQUEST_MECHS_FAILED
} from './constants.js';

const initialStateSearch = {
  searchField: '',

}

export const searchMechs = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      //eturn Object.assign({}, state, { searchField: action.payload });
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialStateMechs = {
  isPending: false,
  mechs: [],
  error: ''
}

export const requestMechs = (state = initialStateMechs, action = {}) => {
  switch(action.type) {
    case REQUEST_MECHS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MECHS_SUCCESS:
      return { ...state, mechs: action.payload, isPending: false };
    case REQUEST_MECHS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
  
    
}