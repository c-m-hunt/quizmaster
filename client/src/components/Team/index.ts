import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Team from './Team';

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);