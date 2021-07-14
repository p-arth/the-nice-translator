import React, { useState } from 'react';
import axios from 'axios';

const NiceTranslator = () => {
  const [englishText, setEnglishText] = useState('');
  const [languageOption, setLanguageOption] = useState('');

  const handleTextChange = (event) => {
    setEnglishText(event.target.value);
  };

  const handleOptionChange = (event) => {
    setLanguageOption(event.target.value);
  };

  const handleTranslateClick = () => {
    console.log(englishText);
    console.log(languageOption);
  };

  return (
    <div className="translator-container">
      <h1>The Nice Translator App</h1>
      <textarea
        className="translator-container__textarea"
        placeholder="Type your text in english right here..."
        value={englishText}
        onChange={handleTextChange}></textarea>
      <select className="translator-container__select" value={languageOption} onChange={handleOptionChange}>
        <option value="german">German</option>
        <option value="portuguese">Portuguese</option>
        <option value="dutch">Dutch</option>
      </select>
      <button className="translator-container__button" onClick={() => handleTranslateClick()}>
        Translate
      </button>
      <h3>Translated text:</h3>
      <p>{englishText ? englishText : 'No text translated yet'}</p>
    </div>
  );
};

export default NiceTranslator;
