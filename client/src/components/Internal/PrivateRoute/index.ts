import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../../reducers';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state: RootState) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
