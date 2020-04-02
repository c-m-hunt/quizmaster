import { ActionType } from 'typesafe-actions';

import * as actions from './../actions';
import { SET_TEAM } from '../actions/constants';

type AppActionTypes = ActionType<typeof actions>;

export interface AppState {
  quizzes: string[]
  team?: string;
}

const initialState = {
  quizzes: [],
}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_TEAM:
      return { ...state, team: action.payload };
    default:
      return state;
  }
}