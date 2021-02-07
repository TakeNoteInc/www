import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getUser } from "./actions/user";

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
  }
  /*
  getUser = async () => {
    try {
      const { cognitoUser } = this.props;
      const { jwtToken } = cognitoUser.signInUserSession.idToken;
      const userId = cognitoUser.attributes.sub;
      const BEARER_TOKEN = "Bearer " + jwtToken;
      const data = { headers: { Authorization: BEARER_TOKEN } };
      const res = await axios.get(GET_USER_URI + userId, data);

      this.setState({ user: res.data.Item });
    } catch (err) {
      console.log(err);
    }
  };
  */

  componentDidMount() {
    const { cognitoUser } = this.props;
    const { jwtToken } = cognitoUser.signInUserSession.idToken;
    const userId = cognitoUser.attributes.sub;
    //console.log(cognitoUser);
    this.props.getUser(jwtToken, userId);
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <Router>
          <Nav title="TakeNotes" links={links} />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage user={user.docBody} />
          </Route>
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

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps, { getUser })(Controller);
