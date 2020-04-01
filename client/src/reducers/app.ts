import { ActionType } from 'typesafe-actions';

import * as actions from './../actions';
import { SET_TEAM, SET_USER, SET_LOGIN_ERROR } from '../actions/constants';

type AppActionTypes = ActionType<typeof actions>;

export interface AppState {
  quizzes: string[]
  team?: string;
  user?: any;
  loginError: string | null;
}

const initialState = {
  quizzes: [],
  loginError: null
}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_TEAM:
      return { ...state, team: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}