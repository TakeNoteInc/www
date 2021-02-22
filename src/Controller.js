import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getUser } from "./actions/user";
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
    const { jwtToken } = cognitoUser.signInUserSession.idToken;
    const userId = cognitoUser.attributes.sub;
    this.props.getUser(jwtToken, userId);
  }

  render() {
    const { cognitoUser, user, loading } = this.props;
    if (loading) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    } else if (user) {
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
    } else {
      return (
        <DateForm
          email={cognitoUser.attributes.email}
          cognitoId={cognitoUser.attributes.sub}
          jwtToken={cognitoUser.signInUserSession.idToken.jwtToken}
        />
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
  loading: state.userData.loading,
});

export default connect(mapStateToProps, { getUser })(Controller);
