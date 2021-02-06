import React, { Component } from "react";
import WeekTab from "./WeekTab.js";
import EntriesTab from "./EntriesTab.js";
import EditorTab from "./EditorTab.js";

class JournalDash extends Component {
  constructor() {
    super();
    this.state = {
      weekIndex: 0,
      entryIndex: 0,
    };
    this.setWeekIndex = this.setWeekIndex.bind(this);
    this.setEntryIndex = this.setEntryIndex.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
  }

  setWeekIndex(weekIndex) {
    this.setState({ weekIndex });
  }

  setEntryIndex(entryIndex) {
    this.setState({ entryIndex });
  }

  saveEntry() {
    //put request to update entry.
  }

  render() {
    const { journal } = this.props;
    const { weekIndex, entryIndex } = this.state;
    const activeWeek = journal.weeks[weekIndex];
    const activeEntry = activeWeek.entries[entryIndex];
    console.log("Active Week " + weekIndex);
    console.log("Active Entry " + entryIndex);

    return (
      <div>
        <WeekTab setWeekIndex={this.setWeekIndex} weeks={journal.weeks} />
        <EditorTab
          weekIndex={weekIndex}
          entryIndex={entryIndex}
          entry={activeEntry}
        />
        <EntriesTab
          setEntryIndex={this.setEntryIndex}
          entries={activeWeek.entries}
        />
      </div>
    );
  }
}

export default JournalDash;
