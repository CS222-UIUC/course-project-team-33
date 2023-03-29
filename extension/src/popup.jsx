import React from "react";
import { render } from "react-dom";

function Popup() {
    return (
        <div>
            <h1>Multi-Lang Text Summary</h1>
            <p>start your text summarizer</p>
            
        </div>
    );
}

render(<Popup/>, document.getElementById("react-target"));