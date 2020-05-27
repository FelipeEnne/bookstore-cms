import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <th>{book.id}</th>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={handleRemoveBook} className="btn btn-danger">Remove Book</button></td>
  </tr>
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
