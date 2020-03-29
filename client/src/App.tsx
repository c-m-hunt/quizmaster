import React from 'react';
import './App.css';
import Login from './components/Login';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz id="test" />
        <Login />
      </header>
    </div>
  );
}

export default App;
