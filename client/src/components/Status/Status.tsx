import React from 'react';
import { User } from './../../types';

type Props = {
  logout: () => void;
  user?: User;
}

export default class Status extends React.PureComponent<Props, {}> {
  render() {
    const { user, logout } = this.props;
    return <main className="status container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          { user &&
            <React.Fragment>
              <p>{user.email}</p>
              <button type="button" className="button button-primary block" onClick={() => logout()}>
                Log out
              </button>
            </React.Fragment>
          }
        </div>
      </div>
    </main>;
  }
}