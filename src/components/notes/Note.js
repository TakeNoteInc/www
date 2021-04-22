import React, { useState, useCallback } from "react";
import { Button, Paper, Typography, Card } from "@material-ui/core";
import axios from "axios";

import "../../styles/notes.css";
import Texteditor from "../TextEditor";
import { connect } from "react-redux";
import { reduceUser } from "../../actions/user";
import { updateNote } from "../../actions/notes";

import { REACT_APP_STAG_BASE } from "../../setupEnv";

// get content from note
const contentPlaceholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet erat eu diam condimentum imperdiet. Praesent vitae massa sed neque lobortis viverra. Vestibulum euismod mattis suscipit.";

function Note({ cognitoUser, noteID, content, updateNote, deleteNoteList }) {
  const [edit, setEdit] = useState(false);
  const [contentText, setContentText] = useState(content || contentPlaceholder);
  const [noteId, setNoteId] = useState(noteID);

  const saveUpdateNote = useCallback(async () => {
    console.log("update: ", noteId, "contentText: ", contentText);
    await updateNote(cognitoUser, noteId, contentText);
  }, [contentText, noteId]);

  const handleEdit = useCallback(async () => {
    if (edit) await saveUpdateNote();
    const editState = !edit;
    setEdit(editState);
  }, [edit, setEdit, saveUpdateNote]);

  const handleText = useCallback(
    (text) => {
      setContentText(text);
    },
    [setContentText]
  );

  const deleteNote = async () => {
    deleteNoteList(noteID);
    try {
      const res = await axios.delete(
        REACT_APP_STAG_BASE + `users/${cognitoUser.cognitoId}/notes/${noteID}`
      );
      reduceUser(res.data.Attributes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Note">
      <Card raised="true">
        <Paper>
          <div className="cardContainer">
            {edit ? (
              <Texteditor
                entry={{ content: contentText }}
                onChange={handleText}
              />
            ) : (
              //<Typography variant="body2"> {content} </Typography>
              <div dangerouslySetInnerHTML={{ __html: contentText }} />
            )}
            <Button variant="outlined" size="small" onClick={handleEdit}>
              {edit ? "save" : "edit"}
            </Button>
            <Button variant="outlined" size="small">
              pin
            </Button>
            <Button variant="outlined" size="small" onClick={deleteNote}>
              delete
            </Button>
          </div>
        </Paper>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cognitoUser: state.userData.cognitoUser,
});

export default connect(mapStateToProps, { updateNote, reduceUser })(Note);
