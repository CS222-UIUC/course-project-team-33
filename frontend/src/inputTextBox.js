import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import './inputTextBox.css';

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}

export default function TextBox() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="text-box">
      <Editor 
        editorState={editorState} 
        onChange={setEditorState} 
        blockStyleFn={myBlockStyleFn}/>
    </div>
  );
}
