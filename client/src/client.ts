import feathers from '@feathersjs/client';
import io from 'socket.io-client';
// import rest from '@feathersjs/rest-client';

const host = 'http://localhost:3030'

//@ts-ignore
const client = feathers();

// const restClient = rest(host);
// client.configure(restClient.fetch(window.fetch));

const socket = io(host);
client.configure(feathers.socketio(socket));

// @ts-ignore
client.configure(feathers.authentication({
  // @ts-ignore
  storage: window.localStorage,
  storageKey: 'quizmaster-auth'
}));

export default client;