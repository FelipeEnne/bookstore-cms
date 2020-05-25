import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        {
          books.map(book => (
            <Book key={book.id} book={book} />
          ))
        }
      </tbody>
    </table>
  </div>
);


const mapStateToProps = state => ({
  books: state.books,
});


BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
};


export default connect(mapStateToProps)(BooksList);
