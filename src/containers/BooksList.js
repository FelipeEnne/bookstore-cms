import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <div className="BooksList">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Example</td>
            <td>test</td>
          </tr>
          {
            books.map((book, index) => (
              <Book key={index} book={book} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}


const mapStateToProps = state => ({
  books: state.books,
});


BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


export default connect(mapStateToProps)(BooksList);
