import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <div className="text-editor" onClick={this.focusEditor}>
        <CKEditor
          editor={ClassicEditor}
          data={content}
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
        <div>
          <button
            className="standard-btn"
            onClick={() => console.log("Save entry")}
          >
            Save Entry
          </button>
          <button
            className="standard-btn"
            onClick={() => console.log("Delete entry")}
          >
            Delete Entry
          </button>
        </div>
      </div>
    );
  }
}

export default TextEditor;
