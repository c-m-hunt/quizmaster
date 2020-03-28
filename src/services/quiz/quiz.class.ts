import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';

export interface QuizData {
  name: string;
  code: string;
  rounds?: string[];
  teams?: string[];
  joker?: boolean
}

export class Quiz extends Service {
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }

  create(data: Pick<QuizData, 'name'>, params?: Params) {
    const code = this.generateCode();
    const quiz: QuizData = {
      ...data,
      code
    }
    return super.create(quiz, params);
  }

  private generateCode(): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    const length = 5;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
