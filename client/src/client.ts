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


client.configure(feathers.authentication({
  storage: window.localStorage
}));

client.service('quiz').find({"_id": "5e7f7a7535f7a62eb4d09793"})
  .then((quiz: any) => {
    console.log(quiz);
  })

export default client;