import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../reducers';
import Status from './Status';

import { logout } from './../../actions';

const mapStateToProps = (state: RootState) => ({
  user: state.app.user
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);


