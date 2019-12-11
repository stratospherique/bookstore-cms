import React from 'react';
import { connect } from 'react-redux';
import { changeFilterAction } from '../actions/index';
import { FilterContainer, StyledText } from './styled-components';

const filterOptions = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class CategoryFilter extends React.Component {
  handleFilterChange = (e) => {
    const { handleFiltering } = this.props;
    handleFiltering(e.target.value);
  }

  render() {
    return (
      <FilterContainer>
        <StyledText
          size="small">
          Filter By:
        </StyledText>
        <select onChange={this.handleFilterChange}>
          {filterOptions.map((filter) => (
            <option key={filter} value={filter}>{filter}</option>
          ))}
        </select>
      </FilterContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFiltering: (filter) => {
    dispatch(changeFilterAction(filter));
  },
});

CategoryFilter = connect(null, mapDispatchToProps)(CategoryFilter);

export default CategoryFilter;
