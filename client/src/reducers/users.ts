import { ActionType } from 'typesafe-actions';

import * as actions from './../actions/user';
import { SET_USER, SET_LOGIN_ERROR } from '../actions/constants';

type UserActionTypes = ActionType<typeof actions>;

export interface UserState {
  user?: any;
  loginError: string | null;
}

const initialState = {
  loginError: null
}

export const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}