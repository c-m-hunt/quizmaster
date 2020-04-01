import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';
import { User as UserData } from './../../types';

export class Users extends Service {
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }

  create(data: Pick<UserData, 'role' | 'email'>, params?: Params) {
    // Default role to player
    const quiz: UserData = {
      ...data,
      role: 'player'
    }
    return super.create(quiz, params);
  }
}
