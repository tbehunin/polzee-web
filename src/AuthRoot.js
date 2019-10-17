import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

const AuthRoot = () => {
    return (
        <div>I'm authenticated!</div>
    );
};

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

export default withAuthenticator(AuthRoot, { signUpConfig });
