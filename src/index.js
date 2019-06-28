import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config';

Amplify.configure({
    Auth: {
        identityPoolId: config.get('AMPLIFYAUTH_IDENTITYPOOLID'),
        region: config.get('AMPLIFYAUTH_REGION'),
        userPoolId: config.get('AMPLIFYAUTH_USERPOOLID'),
        userPoolWebClientId: config.get('AMPLIFYAUTH_USERPOOLCLIENTID'),
        mandatorySignIn: false,
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
