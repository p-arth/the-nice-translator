import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NiceTranslator = () => {
  const [englishText, setEnglishText] = useState('');
  const [languageOption, setLanguageOption] = useState('');
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [translatedText, setTranslatedText] = useState('');

  const handleTextChange = (event) => {
    setEnglishText(event.target.value);
  };

  const handleOptionChange = (event) => {
    setLanguageOption(event.target.value);
  };

  // The ideal would be to optimize and use a dispatch, taking the axios request from Duck with all the fetching actions, but I kept it simple
  const handleTranslateClick = () => {
    return axios
      .get(
        `https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=${englishText}&source_lang=EN&target_lang=${languageOption}`
      )
      .then((response) => {
        let translation = response.data.translations[0].text;
        setTranslatedText(translation);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // The ideal would be to optimize and use a dispatch, taking the axios request from a Duck with all the fetching actions, but I kept it simple
  const getLanguageOptions = () => {
    return axios
      .get(
        `https://api-free.deepl.com/v2/languages?auth_key=${process.env.REACT_APP_DEEPL_KEY}&text=Hello, world&type=target`
      )
      .then((response) => {
        setAvailableLanguages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLanguageOptions();
  }, []);

  return (
    <div className="translator-container">
      <h1>The Nice Translator</h1>
      <textarea
        className="translator-container__textarea"
        placeholder="Type your text in english right here..."
        value={englishText}
        onChange={handleTextChange}></textarea>

      <select className="translator-container__select" value={languageOption} onChange={handleOptionChange}>
        {availableLanguages.map((available) => {
          return (
            <option value={available.language} key={available.language}>
              {available.name}
            </option>
          );
        })}
      </select>

      <button className="translator-container__button" onClick={() => handleTranslateClick()}>
        Translate
      </button>
      <h3>Translated text:</h3>
      <div className="translator-container__box">
        <p>{translatedText ? translatedText : 'No text was translated yet'}</p>
      </div>
    </div>
  );
};

export default NiceTranslator;
