/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import './inputTextBox.css';

export default function OutputTextBox({ returnedSummary, summaryAction }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(returnedSummary)));

  useEffect(() => {
    function updateOutputBox() {
      const newContentState = ContentState.createFromText(returnedSummary);
      const newEditorState = EditorState.createWithContent(newContentState);
      setEditorState(newEditorState);
    }

    updateOutputBox();
  }, [returnedSummary]);

  return (
    <div className="text-box">
      {summaryAction ? (
        <div className="loading-page" />
      ) : (
        <Editor
          editorState={editorState}
          onChange={setEditorState}
        />
      )}
    </div>
  );
}
