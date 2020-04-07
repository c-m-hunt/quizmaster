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
  let render = rest.render;
  if (!render) {
    render=({ location }) => {
      return children
      // return user ? children : 
      // <Redirect
      //   to={{
      //     pathname: "/login",
      //     state: { from: location }
      //   }}
      // />
    }
  }
  rest = { ...rest, render }

  return (
    <Route {...rest} />
  );
}