import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Home = () => {
  return (
    <div>
      <h1>Home page.</h1>
    </div>
  );
};

const PageRouter = (props) => {
  const { user } = props;
  return (
    <Router>
      <Route path="/" component={Home} />
      <p>{user.attributes.email}</p>
      <AmplifySignOut />
    </Router>
  );
};

export default PageRouter;
