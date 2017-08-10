import React, { PropTypes } from 'react';
import { Control, Form } from 'react-redux-form';
import css from '../helpers/css';

const TodoForm = ({ isValid, onSubmit }) => (
  <Form
    className={css('form').mix('form-inline')}
    onSubmit={onSubmit}
    model="todoForm"
  >
    <Control.text
      model=".text"
      className="form-control"
      placeholder="What do you want to do?"
      validators={{
        required: (val) => val && val.length,
      }}
    />
    <button
      type="submit"
      className={css('submit-btn').mix('btn btn-primary')}
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
