import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import favicon from '../assets/favicon.ico';


// If local host, use localhost:3000 as the redirect URI. Otherwise, use the production URL.
const domain = (window.location.href.includes('localhost') || 
                window.location.href.includes('127.0.0.1')) ?
    'http://127.0.0.1:5000/callback' : // redirects to the backend to process the addition of the user
    'https://potatunes.com/callback';

// Spotify authorization URL
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${domain}&scope=${process.env.REACT_APP_SCOPE}`;

function SessionLogin() {
  const [listeningSessionId, setListeningSessionId] = useState(`${Math.random().toString(36).substring(2, 15)}`);
  const [spotifyLink, setSpotifyLink] = useState(`https://potatunes.com/${listeningSessionId}`);
  const [spotifyAuthLink, setSpotifyAuthLink] = useState(`${AUTH_URL}&state=${listeningSessionId}`);

  // TODO: store the listeningSessionId as a cookie so that it persists across page refreshes
  // This function generates a new listening session ID and updates the QR code
  function handleNewSession() {
    setListeningSessionId(Math.random().toString(36).substring(2, 15));
    setSpotifyLink(`https://potatunes.com/${listeningSessionId}`);
    setSpotifyAuthLink(`${AUTH_URL}&state=${listeningSessionId}`)
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

  console.log(AUTH_URL);

  return (
    <div style={pageStyle}>
      <QRCodeSVG value={spotifyAuthLink} style={qrCodeStyle} key={listeningSessionId} />
      <p>Current session id: {listeningSessionId}</p>
      <p>Scan the QR code to join the listening session. Or, click the button below to generate a new listening session.</p>
      <div>
        <button style={buttonStyle} onClick={handleNewSession}>New listening session</button>
        <a style={buttonStyle} href={spotifyAuthLink}>Add user</a>
      </div>

    </div>
  );
}

export default SessionLogin;
