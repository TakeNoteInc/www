import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

//ui library
import Nav from "./lib/Nav";

//Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

const PageRouter = (props) => {
  const { user } = props;
  return (
    <Router>
      <Nav title="TakeNotes" links={links} />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage user={user} />
      </Route>
      <AmplifySignOut />
    </Router>
  );
};

export default PageRouter;
