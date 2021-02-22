import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import dotenv from "dotenv";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import Controller from "./Controller";
import awsconfig from "./aws-exports";
// redux store
import store from "./store";
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
    <Provider store={store}>
      <Controller cognitoUser={cognitoUser} />
    </Provider>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[{ type: "email" }, { type: "password" }]}
      />
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
