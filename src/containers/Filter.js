import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/appActions';
import Filter from '../components/Filter';

const mapDispatchToProps = {
  onClick: setVisibilityFilter,
};

export default connect(undefined, mapDispatchToProps)(Filter);
