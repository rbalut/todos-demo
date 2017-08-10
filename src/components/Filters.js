import React from 'react';
import css from '../helpers/css';
import Filter from '../containers/Filter';

const Filters = () => (
  <div className={css('filters')}>
    <Filter value={null}>All</Filter>
    <Filter value>Completed</Filter>
    <Filter value={false}> Not Completed</Filter>
  </div>
);

export default Filters;
