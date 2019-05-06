import React, {Component} from 'react';
import PropTypes from 'prop-types';
import'./TodoItem.css';

class TodoItem extends Component {

  static propTypes = {
    clicked: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'No title given.',
    text: 'No Task given.',
    date: 'No Deadline given.'
  };

  onDeleteClicked = () => {
    if ('clicked' in this.props){
      this.props.clicked();
    } else {
      console.warn('Warning!!');
    }
  }

  render() {
    return (
      <div className='TodoItem'>
        <button className='Delete-button' onClick={this.onDeleteClicked}>X</button>
        <p><strong>Task Title:</strong> {this.props.title}</p>
        <p><strong>TODO:</strong> {this.props.text} </p>
        <p><strong>Deadline:</strong> {this.props.date}</p>
      </div>
    );
  }

};

export default TodoItem;
