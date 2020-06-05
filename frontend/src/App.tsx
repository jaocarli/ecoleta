import React, { useState } from 'react';
import './App.css';


import Header from './Header';

function App() {
  const counter = useState(0);

  function handleButtonClick() {
    counter++;
    console.log(counter);
  }

  return (
        (
          <div>
            <Header title="Hello World" />

            <h1>{counter}</h1>
            <button type="button" onClick={handleButtonClick}>aumentar</button>
          </div>
        )
  );
}

export default App;
