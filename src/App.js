import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import QRHost from './pages/QRHost.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to={"/session_id/" + Math.random().toString(36).substring(2, 15)} />}/>
        <Route path="/session_id/:session_id" element={<QRHost/>} />
      </Routes>
  );
}

export default App;
