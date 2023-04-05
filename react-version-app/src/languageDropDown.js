import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './languageDropDown.css';

function LanguageSelect() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleLanguageClick = (language) => {
        setOpen(false);
        setLanguage(language)
    };

    return (
        <div className="menu-wrapper">
            <button className="menu-close" onClick={handleOpen}> 
                {language}
            </button>

            <div className="menu-icon">
            {open ? 
                <SlArrowUp color='rgb(254, 245, 239)' size={13} />
                : <SlArrowDown color='rgb(254, 245, 239)' size={13} />
            }
            </div>
            
            {open ? (
                <div className="menu-open">
                    <div className="menu-item" onClick={() => handleLanguageClick("English")}> 
                        English 
                    </div>
                    <div className="menu-item" onClick={() => handleLanguageClick("中文")}> 
                        中文 
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default LanguageSelect;

/*
<li className="menu-item">
                        <button> English </button>
                    </li>

                    <li className="menu-item">
                        <button> 中文 </button>
                    </li>
*/