// Initializes the `quizEntry` service on path `/quiz-entry`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { QuizEntry } from './quiz-entry.class';
import hooks from './quiz-entry.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'quiz-entry': QuizEntry & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/quiz-entry', new QuizEntry(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('quiz-entry');

  service.hooks(hooks);
}
