import React from "react";

import TextEditor from "../TextEditor.js";

const EditorTab = (props) => {
  const { entry } = props;
  const { accomplished, learned, blockers } = entry.content;
  const entryText = accomplished + " " + learned + " " + blockers;

  return (
    <div>
      <TextEditor defaultContents={entryText} />
    </div>
  );
};

export default EditorTab;
