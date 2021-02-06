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
          this.props.userAuthData.attributes.sub,
        {
          headers: {
            Authorization:
              "Bearer " +
              this.props.userAuthData.signInUserSession.idToken.jwtToken,
          },
        }
      )
      .then((res) => {
        this.setState({ user: res.data.Item.docBody });
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

    if (!user) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <Router>
          <Nav title="TakeNotes" links={links} />
          <Route exact path="/">
            <HomePage user={user} />
          </Route>
          <Route exact path="/profile">
            <ProfilePage user={user} />
          </Route>
          <AmplifySignOut />
        </Router>
      );
    }
  }
}

export default Controller;
