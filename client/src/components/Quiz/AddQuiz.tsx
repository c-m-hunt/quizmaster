import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { InputEvnt } from './../../clientTypes';
import { Quiz } from './../../types';

type Props = {
  addQuiz: (quiz: Quiz) => Promise<void>;
}

type State = {
  name: '',
  description: '',
  date: '',
  time: ''
}

export default class AddQuiz extends React.PureComponent<Props, State> {

  updateField(name: string, ev: InputEvnt): void {
    //@ts-ignore
    this.setState({ [name]: ev.target.value });
  }

  addQuiz() {
    const quiz: Quiz = {
      name: this.state.name,
      date: new Date(`${this.state.date} ${this.state.time}`)
    }
    this.props.addQuiz(quiz);
  }

  render() {
    return <Form>
    <Form.Group>
      <Form.Label>Quiz name</Form.Label>
      <Form.Control type='input' placeholder='quiz name' name='name' onChange={(ev: InputEvnt) => this.updateField('name', ev)}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Date and time</Form.Label>
      <Form.Control type='date' placeholder='date' name='date' onChange={(ev: InputEvnt) => this.updateField('date', ev)} />
      <Form.Control type='time' placeholder='time' name='time' onChange={(ev: InputEvnt) => this.updateField('time', ev)} />
    </Form.Group>
    <Button variant="primary" onClick={() => this.addQuiz()}>
      Add quiz
    </Button>
  </Form>
  }
}