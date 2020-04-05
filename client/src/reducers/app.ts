import { ActionType } from 'typesafe-actions';
import { Application } from '@feathersjs/feathers';

import * as actions from './../actions';
import {
  SET_APP_CLIENT,
  SET_TEAM
} from '../actions/constants';

type AppActionTypes = ActionType<typeof actions>;

export interface AppState {
  client?: Application;
  team?: string;
}

const initialState = {

}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_APP_CLIENT:
      return { ...state, client: action.payload };
    case SET_TEAM:
      return { ...state, team: action.payload };
    default:
      return state;
  }
}