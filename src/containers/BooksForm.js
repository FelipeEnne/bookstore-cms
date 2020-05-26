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

        <form id="bookStoreForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <h5>Title</h5>
              <input type="text" className="form-control" id="inputTitle" name="title" onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-4">
              <h5>Category</h5>
              <select id="inputCategory" className="form-control" name="category" onChange={this.handleChange}>
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
