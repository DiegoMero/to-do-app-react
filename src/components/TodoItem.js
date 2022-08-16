/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
