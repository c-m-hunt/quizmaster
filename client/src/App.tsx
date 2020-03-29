import React from 'react';
import './App.css';
import Login from './components/Login';
import Team from './components/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
