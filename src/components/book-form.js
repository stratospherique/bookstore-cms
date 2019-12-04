import React from 'react';
import { connect } from 'react-redux';
import { creatBookAction } from '../actions/index';
import { StyledText, FormContainer, Button } from './styled-components';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
let identifier = 4;

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { handleAdding } = this.props;
    handleAdding({ id: identifier, ...this.state });
    identifier += 1;
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
          category: state.category,
        }));
        break;
      default:
        this.setState((state) => ({
          title: state.title,
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
        >Add a Book
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
    dispatch(creatBookAction(book));
  },
});

BookForm = connect(null, mapDispatchToProps)(BookForm);

export default BookForm;
