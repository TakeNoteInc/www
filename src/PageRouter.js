import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

//lib
import Nav from "./lib/Nav";

// Pages
import HomePage from "./pages/HomePage";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

const PageRouter = (props) => {
  const { user } = props;
  return (
    <Router>
      <Nav title="TakeNotes" links={links} />
      <Route exact path="/">
        <HomePage />
      </Route>
    </Router>
  );
};

export default PageRouter;
