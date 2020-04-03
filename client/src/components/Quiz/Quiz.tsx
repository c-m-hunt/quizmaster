import React from 'react';
import { Quiz as IQuiz } from './../../types';

type Props = {
  quizzes: IQuiz[];
  //addQuiz: () => void;
}

export default class Quiz extends React.PureComponent<Props, {}> {
  render() {
    const { quizzes } = this.props; 
    return <div>
      <h2>Quizzes</h2>
      <div className='card'>
        <div className='card-header'>
          <h3>Add quiz</h3>
        </div>
        

      </div>
      <table>
        { quizzes.map(quiz => {

        })}
      </table>

    </div>
  }
}