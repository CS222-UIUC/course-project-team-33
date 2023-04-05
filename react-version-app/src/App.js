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

    useEffect(() => {
        const sendQuery = async (queryText) => {
            console.log("sending Query: ", queryText);
            var data = await fetch('http://localhost:8000/MultiLangApp/post_summary/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    article: queryText
                })
            })
    
            data = await data.json();
            console.log('successfully summerized');
            console.log(data);
    
            return data['summary'];
        }
        
        async function fetchData(queryText) {
            const response = await sendQuery(queryText);
            let summaryText = '';
            for (let i = 0; i < response.length; i++) {
                summaryText = summaryText + ' ' + response[i];
            }
            console.log(summaryText);
            setReturnedSummary(summaryText);
        }
        
        fetchData(queryText);
    }, [queryText]);

    return (
        <div className="entrance">
            <div className='icon'> 
                <MdSummarize color='rgba(254, 245, 239, 0.66)' size={35}/>
            </div>

            <div className='icon-text'>
                {'Multi-Language \n Summarizer'}
            </div>

            <div className='out-most-wrapper'>
                <div className="input-textbox">
                    <div className="inner">
                        <InputTextBox setQueryText={setQueryText}/>
                    </div>
                </div>

                <div className='language-box'>
                    <LanguageSelect />
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