import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import WeekTab from "./WeekTab.js";
import EntriesTab from "./EntriesTab.js";
import EditorTab from "./EditorTab.js";

class JournalDash extends Component {
  constructor(props) {
    super();
    this.state = {
      journal: props.journal,
      weekIndex: 0,
      entryIndex: 0,
    };
    this.setWeekIndex = this.setWeekIndex.bind(this);
    this.setEntryIndex = this.setEntryIndex.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  setWeekIndex(weekIndex) {
    this.setState({ weekIndex });
  }

  setEntryIndex(entryIndex) {
    this.setState({ entryIndex });
  }

  addEntry(entry) {
    this.state.journal.weeks[this.state.weekIndex].entries.push(entry);
  }

  saveEntry() {
    //put request to update entry.
  }

  render() {
    const { journal, weekIndex, entryIndex } = this.state;
    const activeWeek = journal.weeks[weekIndex];
    const activeEntry = activeWeek.entries[entryIndex];

    return (
      <div className="journal-dashboard">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <WeekTab setWeekIndex={this.setWeekIndex} weeks={journal.weeks} />
          </Grid>
          <Grid item xs={6}>
            <EditorTab data={activeEntry} />
          </Grid>
          <Grid item xs={3}>
            <EntriesTab
              setEntryIndex={this.setEntryIndex}
              addEntry={this.addEntry}
              entries={activeWeek.entries}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JournalDash;
