import React, { Component } from "react";

//components
import JournalDash from "./journal/JournalDash";
import NotesDash from "./notes/NotesDash";

const sampleUser = {
  email: "johsn@smith.com",
  name: "John Smith",
  journal: {
    weeks: [
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "this is my accomphlishment...",
              learned: "that gurm is dumb...",
              blockers: "gurm not pushing code",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "week 2 entry 1 accmom",
              learned: "learned wk2 e1",
              blockers: "blockers",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
      {
        created: "2021-01-31T02:22:12+0000",
        updated: "2021-01-31T02:22:12+0000",
        entries: [
          {
            id: 1,
            created: "2021-01-31T02:22:12+0000",
            updated: "2021-01-31T02:22:12+0000",
            content: {
              accomplished: "",
              learned: "",
              blockers: "",
            },
          },
        ],
      },
    ],
  },
  notes: [
    {
      header: "header",
      content: "content",
    },
    {
      header: "header",
      content: "content",
    },
  ],
};

class HomeDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: sampleUser,
      journalViewActive: true,
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(journalViewActive) {
    this.setState({ journalViewActive });
  }

  render() {
    const { user, journalViewActive } = this.state;
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
