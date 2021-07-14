import React, { useState } from 'react';

const NiceTranslator = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="translator-container">
      <textarea className="translator-container__textarea"></textarea>
      <button onClick={() => setCounter(counter + 1)}>Add to Counter</button>
      <p>{counter}</p>
    </div>
  );
};

export default NiceTranslator;
