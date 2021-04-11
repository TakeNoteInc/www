import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import isEmpty from "./utils/isEmpty";
import { getUser, setCognitoData } from "./actions/user";
//ui library
import Nav from "./lib/Nav";
import DateForm from "./components/DateForm";
//Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

class Controller extends Component {
  componentDidMount() {
    const { cognitoUser } = this.props;
    // set cognito auth data to store
    this.props.setCognitoData(cognitoUser);
    const { jwtToken } = cognitoUser.signInUserSession.idToken;
    const cognitoId = cognitoUser.attributes.sub;
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwtToken;
    // fetch user from database
    this.props.getUser(cognitoId, jwtToken);
  }

  render() {
    const { cognitoUser, user } = this.props;
    if (user == null) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    } else if (isEmpty(user)) {
      return (
        <DateForm
          email={cognitoUser.attributes.email}
          cognitoId={cognitoUser.attributes.sub}
          jwtToken={cognitoUser.signInUserSession.idToken.jwtToken}
        />
      );
    } else {
      return (
        <Router>
          <Nav title="TakeNotes" links={links} />
          <Route exact path="/">
            <HomePage cognitoUser={cognitoUser} />
          </Route>
          <Route exact path="/profile">
            <ProfilePage user={user.docBody} />
          </Route>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps, { setCognitoData, getUser })(
  Controller
);
