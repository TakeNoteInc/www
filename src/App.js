import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import PageRouter from "./PageRouter";
import awsconfig from "./aws-exports";
import "./styles/globals.css";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user?.signInUserSession ? (
    <div className="App">
      <PageRouter user={user} />
    </div>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          { type: "email" },
          { type: "password" },
          {
            type: "custom:startDate",
            name: "custom:startDate",
            label: "Start Date",
            inputProps: {
              type: "date",
            },
          },
          {
            type: "custom:endDate",
            name: "custom:endDate",
            label: "End Date",
            inputProps: {
              type: "date",
            },
          },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
