import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';


class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    const s = this.props;
    const bookIndex = (s.books).findIndex(x => x === book);
    removeBook(bookIndex);
  }

  handleFilterChange(e) {
    const filter = e.target.value;
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { books, filter } = this.props;

    let filterCategory;

    if (filter === 'All') {
      filterCategory = books;
    } else {
      filterCategory = books.filter(book => book.category === filter);
    }

    return (
      <div className="BooksList">
        <CategoryFilter handleChange={this.handleFilterChange} />
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
            {filterCategory.map(book => (
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: book => dispatch(changeFilter(book)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
  changeFilter: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
