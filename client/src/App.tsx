import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Team from './components/Team';
import Quiz from './components/Quiz';
import QuizDetail from './components/Quiz/QuizDetail';
import Nav from './components/Nav';
import PrivateRoute from './components/Internal/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import client from './client';
import { setUser } from './actions/user';
import { setAppClient } from './actions';
import { Jumbotron } from 'react-bootstrap';

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
              <Route path='/login'>
                <Login />
              </Route>
              <PrivateRoute path='/quiz/:id?' render={(match) => {
                return <QuizDetail quizId={match.match.params.id} />
              }} />
              <PrivateRoute path='/quizzes'>
                <Quiz />
              </PrivateRoute>
              <PrivateRoute path='/teams'>
                <Team />
              </PrivateRoute>
              <Route path="*">
                <Jumbotron>
                  <h1>Page not found</h1>
                </Jumbotron>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}



export default App;
