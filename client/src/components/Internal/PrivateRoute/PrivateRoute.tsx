import React, { ReactNode } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { User } from '../../../types';

interface PrivateRouteProps {
  children: ReactNode;
  user?: User;
  path: string
}

export default ({ children, user, ...rest}: PrivateRouteProps) => {
  return (
    <Route {...rest}
      render={({ location }) => {
        return user ? children : 
        <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
      }}
    />
  );
}