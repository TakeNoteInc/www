import React, { Component } from "react";
import Note from './Note.js';
import { Grid, Button } from '@material-ui/core';

class NotesDash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // map through retrieved notes to display. 

  render() {
    return( 
      <div>
        <Button variant = "contained" color = "primary" size = "large">Add+</Button>
        <Grid container direction = "row">
          <Note> 
          </Note>
          <Note> 
          </Note>
          <Note> 
          </Note>
        </Grid>
  
      </div>
    )
  }
}

export default NotesDash;
