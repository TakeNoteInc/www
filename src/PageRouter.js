import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

//ui library
import Nav from "./lib/Nav";

//Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

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

const links = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

const PageRouter = (props) => {
  const { user } = props;
  return (
    <Router>
      <Nav title="TakeNotes" links={links} />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage user={user} />
      </Route>
      <AmplifySignOut />
    </Router>
  );
};

export default PageRouter;
