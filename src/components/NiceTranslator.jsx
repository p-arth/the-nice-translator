import React, { useState } from 'react';

const NiceTranslator = () => {
  const [englishText, setEnglishText] = useState('');

  const handleTextChange = (event) => {
    setEnglishText(event.target.value);
  };

  const handleTranslateClick = () => {
    console.log(englishText);
  };

  return (
    <div className="translator-container">
      <h1>The Nice Translator App</h1>
      <textarea
        className="translator-container__textarea"
        placeholder="Type your text in english right here..."
        value={englishText}
        onChange={handleTextChange}></textarea>
      <button className="translator-container__button" onClick={() => handleTranslateClick()}>
        Translate
      </button>
      <h3>Translated text:</h3>
      <p>{englishText ? englishText : 'No text translated yet'}</p>
    </div>
  );
};

export default NiceTranslator;
