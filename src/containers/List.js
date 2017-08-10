import { connect } from 'react-redux';
import List from '../components/List';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = (state) => ({
  items: getVisibleTodos(state),
});

export default connect(mapStateToProps)(List);
