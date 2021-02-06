import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

//ui library
import Nav from "./lib/Nav";

//Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const GET_USER_URI =
  process.env.REACT_APP_GET_USER_URI ||
  "https://f2n5qr8i08.execute-api.us-east-1.amazonaws.com/prod/users/";

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

class Controller extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };

    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    const { cognitoUser } = this.props;
    const BEARER_TOKEN =
      "Bearer " + cognitoUser.signInUserSession.idToken.jwtToken;
    axios
      .get(GET_USER_URI + cognitoUser.attributes.sub, {
        headers: {
          Authorization: BEARER_TOKEN,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data.Item });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <Router>
          <Nav title="TakeNotes" links={links} />
          <Route exact path="/">
            <HomePage user={user.docBody} />
          </Route>
          <Route exact path="/profile">
            <ProfilePage user={user.docBody} />
          </Route>
          <AmplifySignOut />
        </Router>
      );
    } else {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
  }
}

export default Controller;
