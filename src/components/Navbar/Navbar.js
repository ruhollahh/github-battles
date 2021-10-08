import * as React from 'react'
import PropTypes from 'prop-types';
import './Navbar.styles.css'

export const Navbar = ({ selectedLanguage, onSelect }) => {
    const langs = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  
    return (
      <ul className="navbar">
        {langs.map((lang) => (
          <li key={lang}>
            <button
              className="navbar-btn"
              style={{
                color: lang === selectedLanguage ? 'rgb(187, 46, 31)' : null,
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  Navbar.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };