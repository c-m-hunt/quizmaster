import React from 'react';
import client from '../client';

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

  updateField(name: string, ev: React.ChangeEvent<HTMLInputElement>): void {
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
    return <main className="quiz container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Add team</h1>
          <p>{this.state.error && this.state.error.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input className="block" type="text" name="teamName" placeholder="team name" onChange={ev => this.updateField('teamName', ev)} />
              <input className="block" type="email" name="captainEmail" placeholder=" captain email" onChange={ev => this.updateField('captainEmail', ev)} />
            </fieldset>
            <button type="button" className="button button-primary block signup" onClick={() => this.createTeam()}>
              Create team
            </button>
          </form>
        </div>
      </div>
    </main>;
  }
}