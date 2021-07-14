import React, { useState } from 'react';

const NiceTranslator = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add to Counter</button>
      <br></br>
      <p>{counter}</p>
    </div>
  );
};

export default NiceTranslator;
