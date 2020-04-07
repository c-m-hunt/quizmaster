import React from 'react';
import { Quiz as IQuiz, DBObj } from '../../../types';
import { Service } from '@feathersjs/feathers';
import moment from 'moment';

type Props = {
  quizId: string;
  quizService?: Service<any>;
}

type State = {
  quiz?: IQuiz & DBObj;
}

export default class QuizDetail extends React.PureComponent<Props, State> {

  state: Readonly<State> = {}

  componentDidMount() {
    const { quizId, quizService } = this.props;
    console.log(quizId);
    console.log("HERE")
    quizService?.get(quizId)
    .then(data => {
      this.setState({
        quiz: data
      });
    });
  }

  render() {
    const { quiz } = this.state;
    if (quiz) {
      return <div>
        <h2>{quiz.name}</h2>
        <h3>{moment(quiz.date).format('ddd DD/MM/YYYY HH:mm')}</h3>
      </div>
    } else {
      return <h2>Loading...</h2>
    }
  }
}