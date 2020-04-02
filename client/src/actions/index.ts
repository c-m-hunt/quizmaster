// import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import {
  SET_TEAM,
  SET_USER,
  SET_LOGIN_ERROR
} from './constants';
import client from '../client';

export const setTeam = (team: string) => action(SET_TEAM, team);

export const setUser = (user: any) => action(SET_USER, user);
export const setLoginError = (msg: string | null) => action(SET_LOGIN_ERROR, msg);

export const login = (email: string, password: string) =>
(
  async (dispatch: Dispatch) => {
    try {
      const response = await client.authenticate({
        strategy: 'local',
        email, password
      })
      dispatch(setUser(response.user));
      dispatch(setLoginError(null));
    } catch (error) {
      dispatch(setLoginError(error.message));
    }
  }
)

export const logout = () =>
(
  async (dispatch: Dispatch) => {
    const response = await client.logout()
    console.log(response);
    dispatch(setUser(null));
    dispatch(setLoginError(null));
  }
)