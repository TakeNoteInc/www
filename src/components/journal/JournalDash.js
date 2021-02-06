import React, { Component } from "react";
import './journal.css'
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

    return (
      <div className = "layout">
        <div className="left"> 
          <WeekTab 
            setWeekIndex={this.setWeekIndex} 
            weeks={journal.weeks} 
            activeWeek = {weekIndex}/>
        </div>
        <div className="middle">        
          <EditorTab
              weekIndex={weekIndex}
              entryIndex={entryIndex}
              entry={activeEntry}/>
        </div>
        <div className="right">        
          <EntriesTab
            setEntryIndex={this.setEntryIndex}
            entries={activeWeek.entries}
          />
        </div>
      </div>
    );
  }
}

export default JournalDash;
