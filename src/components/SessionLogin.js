import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import favicon from '../assets/favicon.ico';

function SessionLogin() {
  const [listeningSessionId, setListeningSessionId] = useState(`${Math.random().toString(36).substring(2, 15)}`);
  const [spotifyLink, setSpotifyLink] = useState(`https://potatunes.com/${listeningSessionId}`);

  // TODO: store the listeningSessionId as a cookie so that it persists across page refreshes
  // This function generates a new listening session ID and updates the QR code
  function handleNewSession() {
    setListeningSessionId(Math.random().toString(36).substring(2, 15));
    setSpotifyLink(`https://potatunes.com/${listeningSessionId}`);
  }

  // Define custom styles for the QR code
  const qrCodeStyle = {
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

  const pageStyle = {
    // center everything on page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      <QRCodeSVG value={spotifyLink} style={qrCodeStyle} key={listeningSessionId} />
      <p>Current session id: {listeningSessionId}</p>
      <p>Scan the QR code to join the listening session. Or, click the button below to generate a new listening session.</p>
      <div>
        <button style={buttonStyle} onClick={handleNewSession}>New listening session</button>
        <a style={buttonStyle} href="http://localhost:5000">Add user</a>
      </div>

    </div>
  );
}

export default SessionLogin;
