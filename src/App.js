import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import Controller from "./Controller";
import awsconfig from "./aws-exports";

// global styling
import "./styles/globals.css";
// config environment
dotenv.config();
Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [cognitoUser, setCognitoUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setCognitoUser(authData);
    });
  }, []);

  const cognitoAuthIsValid =
    authState === AuthState.SignedIn &&
    cognitoUser &&
    cognitoUser?.signInUserSession;

  return cognitoAuthIsValid ? (
    <div className="App">
      <Controller cognitoUser={cognitoUser} />
    </div>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          { type: "email" },
          {
            type: "custom:startDate",
            name: "custom:startDate",
            label: "Start Date *",
            inputProps: {
              type: "date",
            },
          },
          {
            type: "custom:endDate",
            name: "custom:endDate",
            label: "End Date *",
            inputProps: {
              type: "date",
            },
          },
          { type: "password" },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
