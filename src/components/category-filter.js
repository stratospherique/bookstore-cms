import React from 'react';
import { connect } from 'react-redux';
import { changeFilterAction } from '../actions/index';

const filterOptions = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class CategoryFilter extends React.Component {

  handleFilterChange = (e) => {
    const { handleFiltering } = this.props;
    handleFiltering(e.target.value);
  }
  render() {
    return (
      <div>
        <select onChange={this.handleFilterChange}>
          {filterOptions.map((filter, index) => {
            return (
              <option key={index} value={filter}>{filter}</option>
            )
          })}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFiltering: (filter) => {
    dispatch(changeFilterAction(filter));
  }
})

CategoryFilter = connect(null, mapDispatchToProps)(CategoryFilter);

export default CategoryFilter;