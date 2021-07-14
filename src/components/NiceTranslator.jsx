import React, { useState } from 'react';

const NiceTranslator = () => {
  const [englishText, setEnglishText] = useState('');

  const handleTextChange = (event) => {
    setEnglishText(event.target.value);
  };

  return (
    <div className="translator-container">
      <h1>The Nice Translator App</h1>
      <textarea
        className="translator-container__textarea"
        placeholder="Type your text in english right here..."
        value={englishText}
        onChange={handleTextChange}></textarea>
      <button onClick={() => console.log(englishText)}>Print Text</button>
      <p>{englishText}</p>
    </div>
  );
};

export default NiceTranslator;
