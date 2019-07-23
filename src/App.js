import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import logo from './logo.svg';
import './App.css';
import config from './config';
import { API } from 'aws-amplify';

class App extends Component {
  componentDidMount = () => {
    API.get('generateToken', '').then(resp => {
      console.log('resp', resp);
    });
  }
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
        </header>
      </div>
    );
  }
}
const signUpConfig = {
  hideAllDefaults: true,
  hiddenDefaults: ['username','phone_number'],
  signUpFields: [{
    label:"Email",
    key:"username",
    required: true,
    displayOrder: 1,
    type: 'string',
    custom: false
  },        
  {
    label:"Password",
    key:"password",
    required: true,
    displayOrder: 2,
    type: 'password',
    custom: false
  }]
};
export default withAuthenticator(App, { signUpConfig });
