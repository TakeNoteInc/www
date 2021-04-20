import React, { useState, useCallback } from "react";
import { Button, Paper, Typography, Card } from "@material-ui/core";
import "../../styles/notes.css";
import Texteditor from "../TextEditor";

// get content from note
const contentPlaceholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet erat eu diam condimentum imperdiet. Praesent vitae massa sed neque lobortis viverra. Vestibulum euismod mattis suscipit.";

function editNote() {
  // open text editor within note
}

function pinNote() {
  // pin note to side tab
}

function Note() {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(contentPlaceholder);

  const handleEdit = useCallback(() => {
    const editState = !edit;
    setEdit(editState);
  }, [edit, setEdit]);

  const handleText = useCallback(
    (text) => {
      setContent(text);
    },
    [setContent]
  );

  return (
    <div className="Note">
      <Card raised="true">
        <Paper>
          <div className="cardContainer">
            {edit ? (
              <Texteditor entry={{ content: content }} onChange={handleText} />
            ) : (
              //<Typography variant="body2"> {content} </Typography>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
            <Button variant="outlined" size="small" onClick={handleEdit}>
              {edit ? "save" : "edit"}
            </Button>
            <Button variant="outlined" size="small">
              {" "}
              pin{" "}
            </Button>
            <Button variant="outlined" size="small">
              {" "}
              delete{" "}
            </Button>
          </div>
        </Paper>
      </Card>
    </div>
  );
}

export default Note;
