import React from 'react';
import { Form } from 'react-bootstrap';
import { InputEvnt } from './../../clientTypes';
import client from '../../client';

type Props = {

}

type State = {
  teamName: string,
  captainEmail: string,
  error?: {
    message: string;
  }
}

export default class Team extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      teamName: '',
      captainEmail: ''
    };
  }

  componentDidMount() {

  }

  updateField(name: string, ev: InputEvnt): void {
    //@ts-ignore
    this.setState({ [name]: ev.target.value });
  }

  createTeam(): void {
    const team = {
      name: this.state.teamName,
      captainEmail: this.state.captainEmail
    }
    console.log(team)
    client.service("team").create(team).then((team:any) => console.log(team))
  }

  render() {
    return <Form>
      <Form.Group>
        <Form.Label>Team name</Form.Label>
        <Form.Control type='input' placeholder='team name' name='teamName' onChange={(ev: InputEvnt) => this.updateField('teamName', ev)}/>
        <Form.Text className='text-muted'>
          Leave this blank if you want the captain to choose the team name
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Captain email</Form.Label>
        <Form.Control type='email' placeholder='captain email' name='captainEmail' onChange={(ev: InputEvnt) => this.updateField('captainEmail', ev)} />
        <Form.Text className='text-muted'>
          An invite will be sent to this address
        </Form.Text>
      </Form.Group>
    </Form>
  }
}