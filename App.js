import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundDark, setBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setBackgroundDark((prevState) => !prevState);
  };

  return (
    <>
    <center>
    <div class = "heading">A Simple Greeting Card Component</div>
    <div className={`App ${isBackgroundDark ? 'dark' : 'light'}`}>
      <p>Clk the below button to change the background</p>
      <button onClick={toggleBackground}>
        Toggle Background Color
      </button>
    </div>
    </center>
    </>
  );
}

export default App;
