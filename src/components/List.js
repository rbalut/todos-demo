import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';
import css from '../helpers/css';

const List = ({ items, onRemove, onToggle }) => (
  <ListGroup className={css('list')}>
    {items.map((item) => {
      const handleClick = () => onToggle(item.id);
      const handleRemove = () => onRemove(item.id);
      return (
        <div
          onClick={handleClick}
          className={css('list-item').mix('list-group-item').is({ completed: item.completed })}
          key={item.id}
        >
          <span className={css('list-item-label')}>{item.text}</span>
          <span
            onClick={handleRemove}
            className="glyphicon glyphicon-remove pull-right"
          />
        </div>
      );
    })}
  </ListGroup>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default List;
