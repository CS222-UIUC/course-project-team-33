import React, { useEffect, useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import './inputTextBox.css';

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}

export default function OutputTextBox({ returnedSummary }) {
  const [editorState, setEditorState] = useState(() => (
    EditorState.createWithContent(ContentState.createFromText(returnedSummary))));
  
  useEffect(() => {
    function updateOutputBox() {
      const newContentState = ContentState.createFromText(returnedSummary);
      const newEditorState =  EditorState.createWithContent(newContentState);
      setEditorState(newEditorState);
    }

    updateOutputBox();
  }, [returnedSummary])

  return (
    <div className="text-box">
      <Editor 
        editorState={editorState}
        onChange={setEditorState}
        blockStyleFn={myBlockStyleFn}/>
    </div>
  );
}
