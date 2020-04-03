import React from 'react';
import client from '../../client';
import AddTeam from './AddTeam';

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
    return <div>
      <h2>Teams</h2>
      <div className='card'>
        <div className='card-header'>
          <h3>Add team</h3>
          <AddTeam />
        </div>
        

      </div>
    </div>;
  }
}



