import React, { Component } from "react";

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
          <JournalDash journal={user.journal} />
        ) : (
          <NotesDash user={user} />
        )}
      </div>
    );
  }
}

export default HomeDashBoard;
