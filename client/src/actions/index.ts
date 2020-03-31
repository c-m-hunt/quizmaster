// import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';
import { SET_TEAM } from './constants';

export const setTeam = (team: string) => action(SET_TEAM, team);