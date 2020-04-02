import React from 'react';
import { User } from './../../types';

type Props = {
  logout: () => void;
  user?: User;
}

export default class Status extends React.PureComponent<Props, {}> {
  render() {
    const { user, logout } = this.props;
    return <div>
      { user &&
        <React.Fragment>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-brand'>{user.email}</li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={() => logout()}>
                Log out
              </a>
            </li>
          </ul>
        </React.Fragment>
      }
    </div>
  }
}