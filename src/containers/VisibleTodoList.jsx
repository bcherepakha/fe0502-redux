import { connect } from 'react-redux';
import { toggleTodo, deleteItem } from '../actions';
import TodoList from '../components/TodoList';
 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}
 
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
 
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteItem: id => dispatch(deleteItem(id))
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
