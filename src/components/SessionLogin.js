import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function SessionLogin() {
  const [spotifyLink, setSpotifyLink] = useState('');
  const [listeningSessionId, setListeningSessionId] = useState('');
  // Get CLIENT_ID and REDIRECT_URI from the environment variables
  const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=${process.env.REDIRECT_URI}&state=${listeningSessionId}`;

  // This function generates a new listening session ID and updates the QR code
  function handleNewSession() {
    const newListeningSessionId = Math.random().toString(36).substring(2, 15);
    setListeningSessionId(newListeningSessionId);
    setSpotifyLink(`https://example.com/${newListeningSessionId}`);
  }

  // Define custom styles for the QR code
  const qrCodeStyle = {
    border: '5px solid #ccc',
    borderRadius: '10px',
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
      {/* <QRCodeSVG value={spotifyLink} style={qrCodeStyle} key={listeningSessionId} onScan={handleScan} /> */}
      <QRCodeSVG
        value={"https://www.spotify.com/us/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account"}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        // imageSettings={{
        //   src: "Spotify.png",
        //   x: undefined,
        //   y: undefined,
        //   height: 24,
        //   width: 24,
        //   excavate: true,
        // }}
      />
      <button style={buttonStyle} onClick={handleNewSession}>New listening session</button>
    </div>
  );
}

export default SessionLogin;
