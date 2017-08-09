import { connect } from 'react-redux';
import { addTodo } from '../actions/listActions';
import TodoForm from '../components/TodoForm';

const mapStateToProps = ({ forms }) => ({
  isValid: forms.todo.$form.valid,
});

const mapDispatchToProps = {
  onSubmit: addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
