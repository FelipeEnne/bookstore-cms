import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <th>{book.id}</th>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);


Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};


export default Book;
