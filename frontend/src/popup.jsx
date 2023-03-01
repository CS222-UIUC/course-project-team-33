import React from 'react';
import { render } from 'react-dom';

import "./popup.css";

function Popup() {
    return (
        <div className="entrance">
            <h1 className="app-name"> Multi-Language Summarizer </h1>
            <p> your text here </p>
        </div>
    );
}

render(<Popup />, document.getElementById('react-target'));
