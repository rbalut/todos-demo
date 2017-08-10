import { connect } from 'react-redux';
import { addTodo } from '../actions/listActions';
import TodoForm from '../components/TodoForm';

const mapStateToProps = ({ todoForm }) => ({
  isValid: todoForm.forms.$form.valid,
});

const mapDispatchToProps = {
  onSubmit: addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
