import { combineReducers } from 'redux';
import { AppState, appReducer } from './app';

export interface RootState {
  app: AppState;
}

export default combineReducers({
  app: appReducer
});