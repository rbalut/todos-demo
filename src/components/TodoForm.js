import React, { PropTypes } from 'react';
import { Control, Form } from 'react-redux-form';
import css from '../helpers/css';
import './TodoForm.css';

const TodoForm = ({ isValid, onSubmit }) => (
  <Form
    className={css('form')}
    onSubmit={onSubmit}
    model="todo"
  >
    <Control.text
      model=".description"
      placeholder="What do you want to do?"
      validators={{
        required: (val) => val && val.length,
      }}
    />
    <button
      type="submit"
      disabled={!isValid}
    >
      Add Todo
    </button>
  </Form>
);

TodoForm.propTypes = {
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  isValid: false,
  onSubmit: () => {},
};

export default TodoForm;
