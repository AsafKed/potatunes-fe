import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRHost from './pages/QRHost.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRHost/>} />
      </Routes>
    </Router>
  );
}

export default App;
