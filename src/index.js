import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import bookStore from './reducers/index';


const store = createStore(bookStore);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
