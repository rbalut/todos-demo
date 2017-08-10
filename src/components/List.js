import React, { PropTypes } from 'react';
import css from '../helpers/css';
import './TodoForm.css';

const List = ({ items }) => (
  <ul className={css('list')}>
    {items.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
