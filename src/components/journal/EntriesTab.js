import React from "react";
import { connect } from "react-redux";
import Search from "../Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import EntryMenu from "./EntryMenu";
import { addEntry } from "../../actions/entries";

// Button classes
const inactiveBtn = "row entries-nav-btn";
const activeBtn = "row entries-nav-btn active";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const EntriesTab = (props) => {
  const { user, entries, setEntryIndex, entryIndex, weekIndex } = props;
  if (entries == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  // transform entries map into array of components
  const entryComponents = Object.keys(entries).map((k, index) => {
    // Determine if button is active
    let btnClass = entryIndex === index ? activeBtn : inactiveBtn;
    // Transform date to human readable
    let createdDate = new Date(entries[k].updated);
    //console.log(entries[k]);
    return (
      <div
        key={index}
        className={btnClass}
        onClick={() => setEntryIndex(index)}
      >
        <p>{daysOfWeek[createdDate.getDay()]}</p>
        <small>{createdDate.toDateString()}</small>
        <EntryMenu
          user={user}
          entryIndex={entryIndex}
          weekIndex={weekIndex}
          entryId={k}
        />
      </div>
    );
  });

  return (
    <div className="entries-navbar">
      <Search />
      {entryComponents}
      <button
        className="standard-btn"
        onClick={() => {
          props.addEntry(props.cognitoUser, weekIndex);
        }}
      >
        Add Entry
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
  cognitoUser: state.userData.cognitoUser,
});

export default connect(mapStateToProps, { addEntry })(EntriesTab);
