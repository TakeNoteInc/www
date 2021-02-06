import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div onClick={this.focusEditor}>
        <CKEditor
          editor={ClassicEditor}
          data={"<p>Start your entry here...</p>"}
          onReady={(editor) => {
            //console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            //console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            //console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            //console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default TextEditor;
