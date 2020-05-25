import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { id, title, category } = props.book;

  return (
    <tr>
      <th>{id}</th>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};


export default Book;
