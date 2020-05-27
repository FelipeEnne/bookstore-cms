import { combineReducers } from 'redux';
import bookStore from './book';
import filterReducer from './filter';

export default combineReducers({ books: bookStore, filter: filterReducer });
