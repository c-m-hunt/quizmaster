// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import { Forbidden } from '@feathersjs/errors'; 
import { Role } from '../types';

export default (requiredRole: Role): Hook => {
  return async (context: HookContext) => {
    if (context.params.user.role !== requiredRole) {
      throw new Forbidden('You are not authorised to perform this action');
    }
    return context;
  };
}
