import { combineReducers } from 'redux';
import bookStore from './book';

export default combineReducers({ books: bookStore });
