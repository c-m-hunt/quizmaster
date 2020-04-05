import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { QuizEntry as QuizEntryData} from './../../types';
import { NotImplemented } from '@feathersjs/errors';

interface Data {}

interface ServiceOptions {}

export class QuizEntry implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;

  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  async get (id: Id, params?: Params): Promise<QuizEntryData> {
    throw new NotImplemented();
  }

  async create (data: QuizEntryData, params?: Params): Promise<QuizEntryData> {
    // if (Array.isArray(data)) {
    //   return Promise.all(data.map(current => this.create(current, params)));
    // }

    return data;
  }

  async remove (id: NullableId, params?: Params): Promise<Data> {
    return { id };
  }

  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    throw new NotImplemented();
  }

  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }

  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }
}
