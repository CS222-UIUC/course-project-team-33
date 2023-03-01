import React from "react";
import { render } from "react-dom";

function Popup() {
    return 
        <div> 
            <p> Hello World </p>
            <p> This is a simple popup </p>
        </div>
}

render(<Popup />, document.getElementById("react-target"));