import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
