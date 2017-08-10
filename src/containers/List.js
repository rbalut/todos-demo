import { connect } from 'react-redux';
import List from '../components/List';
import { removeTodo, toggleTodo } from '../actions/listActions';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = (state) => ({
  items: getVisibleTodos(state),
});

const mapDispatchToProps = {
  onRemove: removeTodo,
  onToggle: toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
