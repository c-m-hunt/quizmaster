import { action } from 'typesafe-actions';
import { Application } from '@feathersjs/feathers';
import {
  SET_APP_CLIENT,
  SET_TEAM,
} from './constants';

export const setAppClient = (client: Application) => action(SET_APP_CLIENT, client);

export const setTeam = (team: string) => action(SET_TEAM, team);