import React, { Component } from "react";
import { connect } from "react-redux";

//components
import JournalDash from "./journal/JournalDash";
import NotesDash from "./notes/NotesDash";

class HomeDashBoard extends Component {
  constructor() {
    super();
    this.state = {
      journalViewActive: true,
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(journalViewActive) {
    this.setState({ journalViewActive });
  }

  render() {
    const { journalViewActive } = this.state;
    const { user } = this.props;

    return (
      <div>
        <div>
          <button onClick={() => this.toggleView(true)}>Journal</button>
          <button onClick={() => this.toggleView(false)}>Notes</button>
        </div>
        {journalViewActive ? (
          <JournalDash journal={user.docBody.journal} />
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
