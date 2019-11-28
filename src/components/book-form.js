import React from 'react';
import { connect } from 'react-redux';
import { creatBookAction } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
let identifier = 0;

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      title: '',
      category: 'Action',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { handleAdding } = this.props;
    handleAdding({ id: identifier, ...this.state });
    identifier++;
    this.setState({
      title: '',
      category: 'Action',
    });
    e.target.reset();
  }

  handleChange = (e) => {
    e.persist();
    const { target } = e;
    switch (target.localName) {
      case 'input':
        this.setState((state) => ({
          title: target.value,
          category: state.category
        }));
        break;
      default:
        this.setState((state) => ({
          title: state.title,
          category: target.value
        }));
        break;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="title">Book Title</label>
          <input onChange={this.handleChange} type="text" id="title" value={this.state.title} />
        </div>
        <div>
          <label htmlFor="ctg">Book Category</label>
          <select name="category" id="ctg" onChange={this.handleChange} value={this.state.category}>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <button type="submit" > Submit </button>
      </form>
    );
  }
}

// connect bookForm component to dispatch
const mapDispatchToProps = (dispatch) => ({
  handleAdding: (book) => {
    dispatch(creatBookAction(book));
  },
});

BookForm = connect(null, mapDispatchToProps)(BookForm);

export default BookForm;
