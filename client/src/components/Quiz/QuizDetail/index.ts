import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../../reducers';
import QuizDetail from './QuizDetail';

const mapStateToProps = (state: RootState) => ({
  quizService: state.app.client?.service('quiz'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetail);
