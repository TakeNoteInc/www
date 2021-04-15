import React from "react";
import { Button, Paper, Typography, Card } from "@material-ui/core";
import "../../styles/notes.css";

// get content from note
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet erat eu diam condimentum imperdiet. Praesent vitae massa sed neque lobortis viverra. Vestibulum euismod mattis suscipit.";

function editNote() {
  // open text editor within note
}

function pinNote() {
  // pin note to side tab
}

function Note() {
  return (
    <div className="Note">
     <Card raised="true">
         <Paper>
          <div className="cardContainer">
            <Typography variant="body2"> {content} </Typography>
            <Button variant="outlined" size = "small"> edit </Button>
            <Button variant="outlined" size = "small"> pin </Button>
            <Button variant="outlined" size = "small"> delete </Button>
            </div>
         </Paper>
      </Card>
    </div>
  );
}

export default Note;
