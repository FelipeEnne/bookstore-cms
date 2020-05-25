import React from 'react';
import { connect } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ books }) => (
  <div className="BooksForm">

  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputTitle">Title</label>
        <input type="text" class="form-control" id="inputTitle" />
      </div>
      <div class="form-group col-md-4">
        <label for="inputCategory">Category</label>
        <select id="inputCategory" class="form-control">
        {categories.map(category => (
        <option
          key={categories}
          value={categories}
          defaultValue
        >
          {categories}
        </option>
      ))}
        </select>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  </div>
);

export default BooksForm;
