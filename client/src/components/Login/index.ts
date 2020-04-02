import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../reducers';
import Login from './Login';

import { login } from './../../actions/user';

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);


