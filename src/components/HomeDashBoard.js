import React, { Component } from "react";

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
      user: null,
      journalView: true,
      notesView: false,
    };
  }

  render() {
    return (
      <div>
        <p>Toggle bar</p>
      </div>
    );
  }
}

export default HomeDashBoard;
