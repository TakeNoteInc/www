import React, { Component } from "react";
import { connect } from "react-redux";

//components
import JournalDash from "./journal/JournalDash";
import NotesDash from "./notes/NotesDash";

class HomeDashBoard extends Component {
  constructor() {
    super();
    this.state = {
      journalIsActive: true,
    };
    this.classes = {
      activeBtn: "standard-btn active",
      inactiveBtn: "standard-btn",
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(journalIsActive) {
    this.setState({ journalIsActive });
  }

  render() {
    const { journalIsActive } = this.state;
    const { user } = this.props;
    const { activeBtn, inactiveBtn } = this.classes;

    return (
      <div className="home-dashboard">
        <div className="home-navbar">
          <button
            className={journalIsActive ? inactiveBtn : activeBtn}
            onClick={() => this.toggleView(true)}
          >
            Journal
          </button>
          <button
            className={journalIsActive ? activeBtn : inactiveBtn}
            onClick={() => this.toggleView(false)}
          >
            Notes
          </button>
        </div>
        {journalIsActive ? (
          <JournalDash cognitoUser={this.props.cognitoUser} />
        ) : (
          <NotesDash user={user.docBody} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps)(HomeDashBoard);
