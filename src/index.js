import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import books from './reducers/index';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Title1',
      category: 'Category1',
    },
    {
      id: 2,
      title: 'Title2',
      category: 'Category2',
    },
  ],
};

const store = createStore(books, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
