import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { updateEntry } from "../../actions/entries";

import TextEditor from "../TextEditor.js";

const EditorTab = (props) => {
  const { entries, weekIndex, entryIndex } = props;
  if (entries == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  const entriesArray = Object.keys(entries).map((key) => entries[key]);
  const currentEntry =
    entriesArray.length > 0 ? entriesArray[entryIndex] : null;

  // triggered by editor to set content of current entry
  const onChange = (data) => {
    currentEntry.content = data;
  };

  return (
    <div>
      {currentEntry ? (
        <TextEditor entry={currentEntry} onChange={onChange} />
      ) : (
        <p>Add an entry to start...</p>
      )}
      <div>
        <button
          className="standard-btn"
          onClick={() => {
            props.updateEntry(
              props.cognitoUser,
              currentEntry.id,
              weekIndex,
              currentEntry
            );
          }}
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cognitoUser: state.userData.cognitoUser,
});

export default connect(mapStateToProps, { updateEntry })(EditorTab);
