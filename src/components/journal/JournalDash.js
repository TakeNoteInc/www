import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import WeekTab from "./WeekTab.js";
import EntriesTab from "./EntriesTab.js";
import EditorTab from "./EditorTab.js";

import { getWeeks } from "../../actions/weeks";
import { getEntries, addEntry } from "../../actions/entries";

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
  }

  // sets current week index (id) and triggers fetch of weeks entries
  setWeekIndex(weekIndex) {
    // when selected week changes reset entry index to 0
    this.setState({ weekIndex, entryIndex: 0 }, () => {
      this.props.getEntries(this.props.cognitoUser, this.state.weekIndex);
    });
  }
  // sets current entry index (id) to display in editor
  setEntryIndex(entryIndex) {
    this.setState({ entryIndex });
  }
  // fetch weeks and entries for week (defaults to week 0)
  componentDidMount() {
    this.props.getWeeks(this.props.cognitoUser);
    this.props.getEntries(this.props.cognitoUser, this.state.weekIndex);
  }

  render() {
    const { weeks, entries } = this.props;
    const { weekIndex, entryIndex } = this.state;

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
            <EditorTab
              entries={entries}
              weekIndex={weekIndex}
              entryIndex={entryIndex}
            />
          </Grid>
          <Grid item xs={4}>
            <EntriesTab
              setEntryIndex={this.setEntryIndex}
              entries={entries}
              entryIndex={entryIndex}
              weekIndex={weekIndex}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userData.user,
  cognitoUser: state.userData.cognitoUser,
  weeks: state.weeksData.weeks,
  entries: state.entriesData.entries,
});

export default connect(mapStateToProps, { getWeeks, getEntries, addEntry })(
  JournalDash
);
