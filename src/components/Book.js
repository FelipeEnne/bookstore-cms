import React from 'react';
import PropTypes from 'prop-types';

function Book({ books }) {

  return (
    <tr>
      <th>{books.id}</th>
      <td>{books.title}</td>
      <td>{books.category}</td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};


export default Book;
