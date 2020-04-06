import React, { ReactNode } from 'react';
import {
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom';
import { User } from '../../../types';

interface PrivateRouteProps extends RouteProps {
  children?: ReactNode;
  user?: User;
  render?: (match: any) => ReactNode;
  path?: string;
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