import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/appActions';
import Filter from '../components/Filter';

const mapStateToProps = (state, ownProps) => ({
  isActive: state.app.filter === ownProps.value,
});

const mapDispatchToProps = {
  onClick: setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
