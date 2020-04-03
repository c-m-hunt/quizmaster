import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../reducers';
import Quiz from './Quiz';

const mapStateToProps = (state: RootState) => ({
  quizzes: []
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  // addQuiz
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
