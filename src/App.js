import React, { Component } from 'react';
import AuthRoot from './AuthRoot';
import logo from './logo.svg';
import './App.css';
import config from './config';
import FetchDataButton from './FetchDataButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>config.get: {config.get('TODD')}</div>
          <AuthRoot />
          <FetchDataButton />
        </header>
      </div>
    );
  }
}

export default App;
