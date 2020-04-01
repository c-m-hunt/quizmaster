import * as authentication from '@feathersjs/authentication';
import generateCode from './../../hooks/generate-code';
import validateEmail from '../../hooks/validate-email';
import validateRole from '../../hooks/validate-role';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      validateRole('admin'),
      validateEmail('captainEmail'),
      generateCode('accessCode', 8),
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
