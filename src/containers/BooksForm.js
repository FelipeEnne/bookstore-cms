import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index'

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
}

handleSubmit(e) {
  e.preventDefault();
  const book = { ...this.state, bookId: makeId() };
  const { createBook } = this.props;
  createBook(book);
  this.setState({ title: '', category: 'Action' });
}

render() {
  const { category, title } = this.state;

  return (
    <div className="BooksForm">

    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <h5>Title</h5>
          <input type="text" className="form-control" id="inputTitle" onChange={this.handleChange} value={title}/>
        </div>
        <div className="form-group col-md-4">
          <h5>Category</h5>
          <select id="inputCategory" className="form-control">
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
    </form>

  </div>
  )
}

function mapDispatchToProps(dispatch) { return { saveBook: (book) => dispatch(createBook(book)) }; };

BookForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
