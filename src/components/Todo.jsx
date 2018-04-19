import React from 'react';
import PropTypes from 'prop-types';
 
const Todo = ({ onClick, onDelete, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={e => {e.stopPropagation(); onDelete && onDelete();}}>delete</button>
  </li>
);
 
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
 
export default Todo;
