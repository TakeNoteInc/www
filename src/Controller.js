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
    axios
      .get(
        "https://j6ejsz42zd.execute-api.us-east-1.amazonaws.com/test/users/" +
          this.props.cognitoUser.attributes.sub,
        {
          headers: {
            Authorization:
              "Bearer " +
              this.props.cognitoUser.signInUserSession.idToken.jwtToken,
          },
        }
      )
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
