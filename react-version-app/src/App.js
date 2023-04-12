import React, { useState, useEffect } from 'react';
import InputTextBox from './inputTextBox';
import OutputTextBox from './outputTextBox';
import { MdSummarize } from 'react-icons/md';

import './popup.css';
import './languageDropDown.js';
import LanguageSelect from './languageDropDown.js';

function App() {
    const [queryText, setQueryText] = useState('');
    const [returnedSummary, setReturnedSummary] = useState('');
    const [language, setLanguage] = useState('EN-US');

    useEffect(() => {
        let data;
        const sendQuery = async () => {
            console.log('sending Query: ', queryText);
            data = await fetch('http://localhost:8000/MultiLangApp/post_summary/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    article: queryText,
                    language,
                }),
            });

            data = await data.json();
            console.log('successfully summerized');
            console.log(data);

            return data.summary;
        };

        async function fetchData() {
            if (queryText.length === 0) {
                return;
            }

            const response = await sendQuery(queryText);

            console.log(response);
            setReturnedSummary(response);
        }
        fetchData(queryText);
    }, [queryText, language]);

    return (
        <div className="entrance">
            <div className="icon">
                <MdSummarize color="rgba(254, 245, 239, 0.66)" size={35} />
            </div>

            <div className="icon-text">
                {'Multi-Language \n Summarizer'}
            </div>

            <div className='out-most-wrapper'>
                <div className="input-textbox">
                    <div className="inner">
                        <InputTextBox setQueryText={setQueryText} />
                    </div>
                </div>

                <div className='language-box'>
                    <LanguageSelect setLanguage={setLanguage} />
                </div>

                <div className="output-textbox">
                    <div className="inner">
                        <OutputTextBox returnedSummary={returnedSummary} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
