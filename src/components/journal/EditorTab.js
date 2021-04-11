import React, { useState } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { updateEntry } from "../../actions/entries";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import TextEditor from "../TextEditor.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EditorTab = (props) => {
  const { entries, weekIndex, entryIndex } = props;
  const [notifications, setNotifications] = useState(null);

  const handleClose = () => {
    setNotifications(null);
  };
  const saveEntry = async () => {
    try {
      await props.updateEntry(
        props.cognitoUser,
        currentEntry.id,
        weekIndex,
        currentEntry
      );
      setNotifications("Entry Saved.");
    } catch (e) {
      console.log(e);
    }
  };
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
      {currentEntry ? (
        <div>
          <button className="standard-btn" onClick={saveEntry}>
            Save Entry
          </button>
        </div>
      ) : null}
      <Snackbar
        open={notifications}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {notifications}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cognitoUser: state.userData.cognitoUser,
});

export default connect(mapStateToProps, { updateEntry })(EditorTab);
