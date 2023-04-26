/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './languageDropDown.css';

const LanguageOptions = {
  English: 'EN-US',
  Chinese: 'ZH',
  German: 'DE',
  French: 'FR',
  Spanish: 'ES',
  Italian: 'IT',
};

function LanguageSelect({ setLanguage }) {
  const [open, setOpen] = useState(false);
  const [displayLanguage, setDisplayLanguage] = useState('English');

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLanguageClick = (languageChange) => {
    setOpen(false);
    setDisplayLanguage(languageChange);
    setLanguage(LanguageOptions[languageChange]);
  };

  return (
    <div className="menu-wrapper">
      <button className="menu-close" type="button" onClick={handleOpen}>
        {displayLanguage}
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
          { /* eslint-disable-next-line no-unused-vars */
          Object.entries(LanguageOptions).map(([key, _]) => (
            <div className="menu-item" onClick={() => handleLanguageClick(key)}>
              {key}
            </div>
          ))
          }
        </div>
      ) : null}
    </div>
  );
}

export default LanguageSelect;
