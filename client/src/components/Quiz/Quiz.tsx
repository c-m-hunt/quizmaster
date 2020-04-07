import React from 'react';
import { Quiz as IQuiz, DBObj } from './../../types';
import AddQuiz from './AddQuiz';
import { Service } from '@feathersjs/feathers';
import moment from 'moment';
import { Link } from 'react-router-dom';

type Props = {
  quizService?: Service<any>;
}

type State = {
  quizzes?: (IQuiz & DBObj)[]
}

export default class Quiz extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    this.updateQuizList();
  }

  updateQuizList = () => {
    const { quizService } = this.props;
    quizService?.find()
      .then(response => {
        this.setState({
          quizzes: response.data
        });
      });
  }

  addQuiz = async(quiz: IQuiz): Promise<void> => {
    const { quizService } = this.props;
    await quizService?.create(quiz);
    this.updateQuizList();
  }

  render() {
    const { quizzes } = this.state; 
    return <div>
      <h2>Quizzes</h2>
      <div className='card'>
        <div className='card-header'>
          <h3>Add quiz</h3>
          <AddQuiz addQuiz={this.addQuiz} />
        </div>
      </div>
      {quizzes &&
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {
            quizzes.map((quiz, i) => (
              <tr key={i}>
                <td>{moment(quiz.date).format('ddd DD/MM/YYYY HH:mm')}</td>
                <td>{quiz.name}</td>
                <td>
                  <Link to={`/quiz/${quiz._id}`}>View</Link>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      }
    </div>
  }
}