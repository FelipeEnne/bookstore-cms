import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books } = this.props;

    return (
      <div className="BooksList">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Book ID</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
