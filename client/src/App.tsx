import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Team from './components/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { setTeam } from './actions';

function App() {
  store.dispatch(setTeam('Test team'));
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
