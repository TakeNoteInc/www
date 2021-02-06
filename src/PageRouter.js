import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import axios from "axios";

//ui library
import Nav from "./lib/Nav";

//Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

class PageRouter extends Component {
  constructor() {
    super();
    this.state = {};
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    /* axios
      .get(
        "https://j6ejsz42zd.execute-api.us-east-1.amazonaws.com/test/users/" +
          this.props.user.attributes.sub,
        {
          headers: {
            Authorization:
              "Bearer " + this.props.user.signInUserSession.idToken.jwtToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      */
  }

  componentDidMount() {
    console.log(this.props.user);
    this.getUser();
  }

  render() {
    return (
      <Router>
        <Nav title="TakeNotes" links={links} />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage user={this.props.user} />
        </Route>
        <AmplifySignOut />
      </Router>
    );
  }
}

export default PageRouter;
