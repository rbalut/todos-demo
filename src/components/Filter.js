import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Filter = ({ children, isActive, onClick, value }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(value);
  };
  return (
    <Button
      bsStyle="link"
      disabled={isActive}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

Filter.propTypes = {
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  value: null,
};
export default Filter;
