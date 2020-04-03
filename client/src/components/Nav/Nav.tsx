import React from 'react';
import { Link } from 'react-router-dom';
import { User } from './../../types';
import Status from './../Status';

type Props = {
  user: User;
}

export default class Login extends React.PureComponent<Props, {}> {
  render() {
    const user = this.props.user;
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          {!user &&
            <li className='nav-item'>
              <Link className='nav-link' to="/login">Login</Link>
            </li>
          }
          {user &&
            <React.Fragment>
              <li className='nav-item'>
                <Link className='nav-link' to="/quizzes">Quizzes</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/teams">Teams</Link>
              </li>
            </React.Fragment>
          }
        </ul>
        <span className="navbar-text">
          <Status />
        </span>
      </div>

    </nav>
  }
}