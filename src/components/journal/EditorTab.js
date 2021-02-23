import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import TextEditor from "../TextEditor.js";

const EditorTab = (props) => {
  const { entries, entryIndex } = props;
  if (entries == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  const entriesArray = Object.keys(entries).map((key) => {
    return entries[key];
  });
  const currentEntry =
    entriesArray.length > 0 ? entriesArray[entryIndex] : null;

  return (
    <div>
      {currentEntry ? (
        <TextEditor content={currentEntry.content} />
      ) : (
        <p>Add an entry to start...</p>
      )}
    </div>
  );
};

export default EditorTab;
