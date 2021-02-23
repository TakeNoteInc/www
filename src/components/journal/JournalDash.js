import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import WeekTab from "./WeekTab.js";
import EntriesTab from "./EntriesTab.js";
import EditorTab from "./EditorTab.js";

import { getWeeks } from "../../actions/weeks";
import { getEntries, addEntry } from "../../actions/entries";

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
    this.addEntry = this.addEntry.bind(this);
    this.getAuthData = this.getAuthData.bind(this);
  }

  getAuthData() {
    const cognitoId = this.props.cognitoUser.attributes.sub;
    const { jwtToken } = this.props.cognitoUser.signInUserSession.idToken;
    return { cognitoId, jwtToken };
  }

  setWeekIndex(weekIndex) {
    const { jwtToken, cognitoId } = this.getAuthData();
    this.setState({ weekIndex }, () => {
      this.props.getEntries(cognitoId, jwtToken, this.state.weekIndex);
    });
  }

  setEntryIndex(entryIndex) {
    this.setState({ entryIndex });
  }

  addEntry = async () => {
    const { jwtToken, cognitoId } = this.getAuthData();
    this.props.addEntry(cognitoId, jwtToken, this.state.weekIndex);
  };

  componentDidMount() {
    const { jwtToken, cognitoId } = this.getAuthData();
    this.props.getWeeks(cognitoId, jwtToken);
    this.props.getEntries(cognitoId, jwtToken, this.state.weekIndex);
  }

  render() {
    const { weekIndex, entryIndex } = this.state;
    const { weeks, entries } = this.props;
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
          <Grid item xs={2}>
            <WeekTab
              setWeekIndex={this.setWeekIndex}
              weeks={weeks}
              weekIndex={weekIndex}
            />
          </Grid>
          <Grid item xs={6}>
            <EditorTab entries={entries} entryIndex={entryIndex} />
          </Grid>
          <Grid item xs={4}>
            <EntriesTab
              setEntryIndex={this.setEntryIndex}
              addEntry={this.addEntry}
              entries={entries}
              entryIndex={entryIndex}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
  weeks: state.weeksData.weeks,
  entries: state.entriesData.entries,
});

export default connect(mapStateToProps, { getWeeks, getEntries, addEntry })(
  JournalDash
);
