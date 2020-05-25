import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList(props) {
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
            <td>Exemple</td>
            <td>test</td>
          </tr>
          {
            props.books.map((book) => {
              return (<Book book={book} />);
            })
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
