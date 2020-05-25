import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div className="BooksForm">

    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <h5>Title</h5>
          <input type="text" className="form-control" id="inputTitle" />
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  </div>
);

export default BooksForm;
