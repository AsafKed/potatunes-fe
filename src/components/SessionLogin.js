import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import favicon from '../assets/favicon.ico';

function SessionLogin() {
  const [listeningSessionId, setListeningSessionId] = useState(`${Math.random().toString(36).substring(2, 15)}`);
  const [spotifyLink, setSpotifyLink] = useState(`https://potatunes.com/${listeningSessionId}`);
  
  // This function generates a new listening session ID and updates the QR code
  function handleNewSession() {
    setListeningSessionId(Math.random().toString(36).substring(2, 15));
    setSpotifyLink(`https://potatunes.com/${listeningSessionId}`);
  }

  // Define custom styles for the QR code
  const qrCodeStyle = {
    // border: '5px solid #ccc',
    // borderRadius: '10px',
    margin: '20px',
    padding: '20px',
  };

  // Define custom styles for the "New listening session" button
  const buttonStyle = {
    backgroundColor: '#0077cc',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '20px',
    padding: '10px 20px',
  };

  return (
    <div>
      <QRCodeSVG value={spotifyLink} style={qrCodeStyle} key={listeningSessionId} />
      <button style={buttonStyle} onClick={handleNewSession}>New listening session</button>
    </div>
  );
}

export default SessionLogin;
