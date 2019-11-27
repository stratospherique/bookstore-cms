import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
let identifier = 0;

class BookForm extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: identifier,
      title: this.titleInput.value,
      category: categories[this.categoryValue.options.selectedIndex],
    };
    identifier++;
    this.props.handleAdding(book);
    this.titleInput.value = '';
    this.categoryValue.options.selectedIndex = 0;
  }

  render() {

    return (
      <form>
        <div>
          <label htmlFor="title">Book Title</label>
          <input ref={(node) => { this.titleInput = node; }} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="ctg">Book Title</label>
          <select name="category" id="ctg" ref={node => { this.categoryValue = node }}>
            {categories.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>
        <button type="submit" onClick={this.handleFormSubmit}> Submit </button>
      </form>
    )
  }

}

// connect bookForm component to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdding: (book) => {
      dispatch(actions.creatBookAction(book));
    }
  }
}

BookForm = connect(null, mapDispatchToProps)(BookForm);

export default BookForm;