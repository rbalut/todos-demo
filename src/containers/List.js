import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = ({ list }) => ({
  items: list,
});

export default connect(mapStateToProps)(List);
