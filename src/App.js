import React from 'react';
import { useState } from 'react';
import JSONViewer from 'react-json-viewer';

import logo from './Pot.svg';
import './App.css';
import SessionLogin from './SessionLogin';

function App() {
  // JSON get test
  const [json, setJson] = useState('');
  const [editedJson, setEditedJson] = useState('');

  const handleFetchJson = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8081/testjson');
      const data = await response.json();
      setJson(data);
      setEditedJson(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePutJson = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8081/testjson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: editedJson,
      });
      const data = await response.json();
      setJson(data);
      setEditedJson(JSON.stringify(data, null, 2));
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
      </header>
      <main>
        <div>
          <button onClick={handleFetchJson}>Fetch JSON</button>
          <br />
          <br />
          <textarea
            value={editedJson}
            onChange={(event) => setEditedJson(event.target.value)}
          />
          <br />
          <br />
          <button onClick={handlePutJson}>Save Changes</button>
          <br />
          <br />
          {json && <JSONViewer json={json} />}
        </div>
      </main>
    </div>
  );
}

export default App;
