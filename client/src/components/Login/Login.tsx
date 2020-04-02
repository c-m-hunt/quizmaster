import React from 'react';

type Props = {
  login: (user: string, password: string) => void;
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
    return <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Log in or signup</h1>
          <p>{this.state.error && this.state.error.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input className="block" type="email" name="email" placeholder="email" onChange={ev => this.updateField('email', ev)} />
            </fieldset>

            <fieldset>
              <input className="block" type="password" name="password" placeholder="password" onChange={ev => this.updateField('password', ev)} />
            </fieldset>

            <button type="button" className="button button-primary block signup" onClick={() => this.login()}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>;
  }
}