import React from 'react';
import css from '../helpers/css';
import Filter from '../containers/Filter';

const Filters = () => (
  <div className={css('filters')}>
    <Filter value="SHOW_ALL">All</Filter>
    <Filter value="SHOW_ACTIVE">Active</Filter>
    <Filter value="SHOW_COMPLETED">Completed</Filter>
  </div>
);

export default Filters;
