import React from 'react';
import { connect } from 'react-redux';

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
          <option>Action</option>
          <option>Biography</option>
          <option>History</option>
          <option>Horror</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>Sci-Fi</option>
        </select>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  </div>
);

export default BooksForm;
