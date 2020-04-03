import React from 'react';
import { Form, Button, Jumbotron, Alert } from 'react-bootstrap';
import { InputEvnt } from './../../clientTypes';

type Props = {
  login: (user: string, password: string) => void;
  loginError: string | null;
}

type State = {
  email: string
  password: string,
  error?: {
    message: string
  }
}

export default class Login extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  updateField(name: string, ev: React.ChangeEvent<HTMLInputElement>) {
    //@ts-ignore
    this.setState({ [name]: ev.target.value });
  }

  login() {
    const { email, password } = this.state;
    this.props.login(email, password);
  }


  render() {
    const { loginError } = this.props;

    return <Jumbotron>
        <h1>Login</h1>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='email' name='email' onChange={(ev: InputEvnt) => this.updateField('email', ev)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Captain email</Form.Label>
            <Form.Control type='password' placeholder='password' name='password' onChange={(ev: InputEvnt) => this.updateField('password', ev)} />
          </Form.Group>
          <Button variant="primary" onClick={() => this.login()}>
            Login
          </Button>
        </Form>
        { loginError &&
          <Alert variant='danger'>
            { loginError }
          </Alert>
        }
      </Jumbotron>
  }
}