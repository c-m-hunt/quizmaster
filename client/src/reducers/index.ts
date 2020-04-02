import { combineReducers } from 'redux';
import { AppState, appReducer } from './app';
import { UserState, userReducer } from './users';

export interface RootState {
  app: AppState;
  user: UserState;
}

export default combineReducers({
  app: appReducer,
  user: userReducer
});