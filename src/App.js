import React from 'react';
import { useState } from 'react';
import logo from './Pot.svg';
import './App.css';
import SessionLogin from './SessionLogin';

function App() {
  // JSON get test
  const [json, setJson] = useState('');

  const handleFetchJson = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8081/testjson');
      const data = await response.json();
      setJson(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} alt="logo" />
        <SessionLogin />
        <button onClick={handleFetchJson}>Fetch JSON</button>
        {json && <pre>{json}</pre>}
      </header>
    </div>
  );
}

export default App;
