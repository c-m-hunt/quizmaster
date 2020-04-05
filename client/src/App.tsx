import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Team from './components/Team';
import Quiz from './components/Quiz';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import client from './client';
import { setUser } from './actions/user';
import { setAppClient } from './actions';

store.dispatch(setAppClient(client));

// Let's try and reauthenticate the user
client.reAuthenticate().then(response => {
  store.dispatch(setUser(response.user));
}).catch(() => {
  // Nothing to see here. No user saved
});


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Nav />
          <header className="App-header">

          </header>
          <div className='container'>
            <Switch>
              <Route path='/quizzes'>
                <Quiz />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/quiz/:id?' render={(match) => {
                return <div>Show quiz page {match.match.params.id}</div>
              }} />
              <Route path='/quizzes'>
                <Login />
              </Route>
              <Route path='/teams'>
                <Team />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
