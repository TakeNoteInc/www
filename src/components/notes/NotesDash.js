import React, { useCallback, useEffect, useState, useMemo } from "react";
import Note from "./Note.js";
import { Grid, Button } from "@material-ui/core";
import { addNote, getNotes } from "../../actions/notes";
import { connect } from "react-redux";

const NotesDash = ({ user, cognitoUser, notes, getNotes, addNote }) => {
  const [notesList, setNotesList] = useState(notes);
  console.log("notes: ", notes);
  // map through retrieved notes to display.
  const handleAddNotes = useCallback(async () => {
    await addNote(cognitoUser, "");
    await getNotes();
  }, []);

  useEffect(() => {
    const fetchNote = async () => {
      await getNotes();
    };
    fetchNote();
  }, []);

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const mappedNotes = useMemo(() => {
    const notesArr = [];
    for (const key in notesList) {
      notesArr.push({
        id: notesList[key]?.id,
        content: notesList[key]?.content || "",
      });
    }
    return notesArr;
  }, [notesList]);

  const deleteNoteList = useCallback(
    (id) => {
      const updatedNotesList = mappedNotes.filter((note) => note?.id !== id);
      setNotesList(updatedNotesList);
    },
    [notesList, setNotesList]
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleAddNotes}
      >
        Add+
      </Button>
      <Grid container direction="row">
        {mappedNotes.map((note) => {
          console.log("note: ", note);
          return (
            <Note
              key={`id_${note?.id}`}
              noteID={note?.id}
              content={note?.content}
              deleteNoteList={deleteNoteList}
            />
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
  cognitoUser: state.userData.cognitoUser,
  notes: state?.notesData?.notes,
});

export default connect(mapStateToProps, {
  getNotes,
  addNote,
})(NotesDash);
