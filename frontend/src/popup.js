import React from 'react';
import { render } from 'react-dom';
import { MdSummarize } from 'react-icons/md';
import TextBox from './inputTextBox';

import './popup.css';
import LanguageSelect from './languageDropDown.js';

function Popup() {
    window.React = React;

    return (
        <div className="entrance">
            <div className="icon">
                <MdSummarize color="rgba(254, 245, 239, 0.66)" size={35}/>
            </div>

            <div className="icon-text">
                {'Multi-Language \n Summarizer'}
            </div>

            <div className="out-most-wrapper">
                <div className="input-textbox">
                    <div className="inner">
                        <TextBox />
                    </div>
                </div>

                <div className="language-box">
                    <LanguageSelect />
                </div>

                <div className="output-textbox">
                    <div className="inner">
                        <TextBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

render(<Popup />, document.getElementById('react-target'));
