import React, { useState, useEffect } from 'react';
import InputTextBox from './inputTextBox';
import OutputTextBox from './outputTextBox';
import { MdSummarize } from 'react-icons/md';
import logo from './YlWC.gif';

import './popup.css';
import './languageDropDown.js';
import LanguageSelect from './languageDropDown.js';

function App() {
    const [queryText, setQueryText] = useState('');
    const [returnedSummary, setReturnedSummary] = useState('');
    const [language, setLanguage] = useState('EN-US');
    const [summaryAction, setSummaryAction] = useState(false);
    const [sendQueryFlag, setSendQueryFlag] = useState(false);

    useEffect(() => {
        let data;
        const sendQuery = async () => {
            console.log('sending Query: ', queryText);
            data = await fetch('http://localhost:8000/MultiLangApp/summarize_allLanguage/', {
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
                setSendQueryFlag(false);
                return;
            }

            setSummaryAction(true);
            const response = await sendQuery(queryText);
            setSummaryAction(false);
            setSendQueryFlag(false);

            setReturnedSummary(response);
        }
        if (sendQueryFlag) {
            fetchData(queryText);
        }
    }, [queryText, language, sendQueryFlag]);

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
                        <InputTextBox setQueryText={setQueryText} readOnly={summaryAction} />
                    </div>
                </div>

                <div className='language-box'>
                    <LanguageSelect setLanguage={setLanguage} />
                </div>

                <div className='submit-box'>
                {
                    !summaryAction ?
                    <div className='submit-button-active' onClick={() => setSendQueryFlag(true)}>
                        Submit
                    </div>
                    :
                    <div className='submit-button-freeze'> </div>
                }
                </div>

                <div className="output-textbox">
                {
                    summaryAction ? 
                    <div className='loading-page'> 
                       <div className='loading-page-inner'>
                            <img src={logo} alt="loading ..." width={50} height={50} />
                        </div>
                    </div>
                    :
                    <div className="inner">
                        <OutputTextBox returnedSummary={returnedSummary} summaryAction={summaryAction}/>
                    </div> 
                }
                </div>
            </div>
        </div>
    );
}

export default App;
