/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';


const generateID = () => Math.floor(Math.random() * 100);

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

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const t = document.getElementById('inputTitle').value;
    if (t !== '') {
      const { createBook } = this.props;
      const book = { ...this.state, id: generateID() };
      createBook(book);
      document.getElementById('bookStoreForm').reset();
      this.setState({ title: '', category: 'Action' });
    } else {
      console.error('The title is empty');
    }
  }

  render() {
    return (
      <div className="BooksForm">
        <h5>ADD NEW BOOK</h5>
        <form id="bookStoreForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="inputTitle" name="title" onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-4">
              <select id="inputCategory" className="form-control" name="category" onChange={this.handleChange}>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary add-book" onClick={this.handleSubmit}>ADD BOOK</button>
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
