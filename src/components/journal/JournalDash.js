import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import WeekTab from "./WeekTab.js";
import EntriesTab from "./EntriesTab.js";
import EditorTab from "./EditorTab.js";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

class JournalDash extends Component {
  constructor() {
    super();
    this.state = {
      weekIndex: 0,
      entryIndex: 0,
      weeks: null,
      entries: null,
    };
    this.setWeekIndex = this.setWeekIndex.bind(this);
    this.setEntryIndex = this.setEntryIndex.bind(this);
    this.getWeeks = this.getWeeks.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  setWeekIndex(weekIndex) {
    this.setState({ weekIndex }, () => {
      this.getEntries();
    });
  }

  setEntryIndex(entryIndex) {
    this.setState({ entryIndex });
  }

  generateHeaders(cognitoUser) {
    const { jwtToken } = this.props.cognitoUser.signInUserSession.idToken;
    const BEARER_TOKEN = "Bearer " + jwtToken;
    return { headers: { Authorization: BEARER_TOKEN } };
  }
  getCognitoID() {
    return this.props.cognitoUser.attributes.sub;
  }

  getWeeks = async () => {
    try {
      const cognitoId = this.getCognitoID();
      const headers = this.generateHeaders();
      const path = BASE_URL + `/users/${cognitoId}/journal/weeks`;
      const res = await axios.get(path, headers);
      this.setState({
        weeks: res.data.Item.docBody.journal.weeks,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getEntries = async () => {
    try {
      const cognitoId = this.getCognitoID();
      const headers = this.generateHeaders();
      const path =
        BASE_URL + `/users/${cognitoId}/journal/weeks/${this.state.weekIndex}`;
      const res = await axios.get(path, headers);
      this.setState({
        entries: res.data.Item.docBody.journal.weeks[0].entries,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addEntry = async () => {
    try {
      const data = {
        entry: {
          content: "",
        },
      };
      const cognitoId = this.getCognitoID();
      const headers = this.generateHeaders();
      const path =
        BASE_URL +
        `/users/${cognitoId}/journal/weeks/${this.state.weekIndex}/entries`;
      const res = await axios.post(path, data, headers);
      this.getEntries();
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getWeeks();
    this.getEntries();
  }

  render() {
    const { weeks, entries, weekIndex, entryIndex } = this.state;
    //console.log("week index: " + weekIndex);
    //console.log("entry index: " + entryIndex);
    if (weeks == null) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="journal-dashboard">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <WeekTab setWeekIndex={this.setWeekIndex} weeks={weeks} />
          </Grid>
          <Grid item xs={6}>
            <EditorTab entries={entries} entryIndex={entryIndex} />
          </Grid>
          <Grid item xs={3}>
            <EntriesTab
              setEntryIndex={this.setEntryIndex}
              addEntry={this.addEntry}
              entries={entries}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps)(JournalDash);
