import React from 'react';
import PropTypes from 'prop-types';
import css from '../helpers/css';

const Filter = ({ children, onClick, value }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(value);
  };
  return (
    <button
      className={css('filter')}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  value: null,
};
export default Filter;
