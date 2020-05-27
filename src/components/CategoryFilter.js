import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function CategoryFilter(props) {
  return (
    <div className="selectCategory">
      <select className="form-control" name="category" onChange={e => props.handleChange(e)}>
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = { handleChange: PropTypes.func.isRequired };

export default CategoryFilter;
