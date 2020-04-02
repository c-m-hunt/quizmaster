import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Team from './components/Team';
import Status from './components/Status';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import client from './client';
import { setUser } from './actions';

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
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/addteam">Add team</Link>
              </li>
            </ul>
          </nav>
          <header className="App-header">
            <Status />
            <Switch>
              <Route path='/quizzes'>
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/addteam'>
                <Team />
              </Route>
            </Switch>
          </header>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
