/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './languageDropDown.css';

function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLanguageClick = (languageChange) => {
    setOpen(false);
    setLanguage(languageChange);
  };

  return (
    <div className="menu-wrapper">
      <button className="menu-close" type="button" onClick={handleOpen}>
        {language}
      </button>

      <div className="menu-icon">
        {open ? (
          <SlArrowUp color="rgb(254, 245, 239)" size={13} />
        ) : (
          <SlArrowDown color="rgb(254, 245, 239)" size={13} />
        )}
      </div>

      {open ? (
        <div className="menu-open">
          <div
            className="menu-item"
            onClick={() => handleLanguageClick('English')}
          >
            English
          </div>
          <div
            className="menu-item"
            onClick={() => handleLanguageClick('中文')}
          >
            中文
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LanguageSelect;
