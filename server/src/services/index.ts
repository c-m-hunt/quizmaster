import { Application } from '../declarations';
import users from './users/users.service';
import quiz from './quiz/quiz.service';
import team from './team/team.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(quiz);
  app.configure(team);
}
