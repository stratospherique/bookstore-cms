import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { creatBookAction } from '../actions/index';
import { StyledText, FormContainer, Button } from './styled-components';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: 'Action',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { handleAdding } = this.props;
    handleAdding(this.state);
    this.setState({
      title: '',
      author: '',
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
          author: state.author,
          category: state.category,
        }));
        break;
      default:
        this.setState((state) => ({
          title: state.title,
          author: state.author,
          category: target.value,
        }));
        break;
    }
  }

  render() {
    const { handleChange, state: { title, category } } = this;
    return (
      <FormContainer>
        <StyledText
          size="big"
          color="#3c6382"
        >
          Add a Book
        </StyledText>
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={handleChange} type="text" className="title" value={title} placeholder="Title" />
          <select name="category" className="ctg" onChange={handleChange} value={category}>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <Button
            type="submit"
            text="Submit"
            size="big"
            color="#fff"
            bgColor="#6a89cc" />
        </form>
      </FormContainer>
    );
  }
}

// connect bookForm component to dispatch
const mapDispatchToProps = (dispatch) => ({
  handleAdding: (book) => {
    axios.post('api/v1/books', { book: { title: book.title, author: book.author, category: book.category } })
      .then(response => {
        const theBook = Object.assign({}, book, { id: response.data.id })
        dispatch(creatBookAction(theBook));
      })
      .catch(err => {
        console.log(err);
      })
  },
});

BookForm = connect(null, mapDispatchToProps)(BookForm);

export default BookForm;
