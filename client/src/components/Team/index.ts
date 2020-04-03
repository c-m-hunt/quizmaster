import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../reducers';
import Team from './Team';

const mapStateToProps = (state: RootState) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);