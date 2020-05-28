import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="container-books">
    <div>
      <div className="container-booksTitle">{book.title}</div>
      <div className="container-booksCategory">{book.category}</div>
    </div>
    <div className="container-removeButton">
      <button type="button" onClick={handleRemoveBook} className="btn btn-outline-danger">Remove Book</button>
    </div>
  </div>
);


Book.propTypes = {
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};


export default Book;
