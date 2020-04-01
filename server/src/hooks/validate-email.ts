// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import { BadRequest } from '@feathersjs/errors';

export default (field: string): Hook => {
  return async (context: HookContext) => {
    if (!(/\S+@\S+\.\S+/).test(context.data[field])) {
      throw new BadRequest('Invalid email', {
        email: context.data[field]
      });
    }
    return context;
  };
}
