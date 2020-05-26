import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import books from './reducers/index';

const generateID = () => Math.floor(Math.random() * 100);

const initialState = {
  books: [
    {
      id: generateID(),
      title: 'Title1',
      category: 'History',
    },
    {
      id: generateID(),
      title: 'Title2',
      category: 'Biography',
    },
    {
      id: generateID(),
      title: 'Title3',
      category: 'Learning',
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
