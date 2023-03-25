import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useParams, Link } from 'react-router-dom'
import JSONViewer from 'react-json-viewer';

// If local host, use localhost:3000 as the redirect URI. Otherwise, use the production URL.
const domain = (window.location.href.includes('localhost') ||
    window.location.href.includes('127.0.0.1')) ?
    'http://127.0.0.1:5000/callback' : // redirects to the backend to process the addition of the user
    'https://potatunes.com/callback';

// Spotify authorization URL
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${domain}&scope=${process.env.REACT_APP_SCOPE}`;

function QRHost() {
    // // JSON get test
    // const [json, setJson] = useState('');
    // const [editedJson, setEditedJson] = useState('');

    // const handleFetchJson = async () => {
    //     try {
    //         const response = await fetch('http://127.0.0.1:5000/testjson');
    //         const data = await response.json();
    //         setJson(data);
    //         setEditedJson(JSON.stringify(data, null, 2));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handlePutJson = async () => {
    //     try {
    //         const response = await fetch('http://127.0.0.1:5000/testjson', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: editedJson,
    //         });
    //         const data = await response.json();
    //         setJson(data);
    //         setEditedJson(JSON.stringify(data, null, 2));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const { session_id } = useParams();
    console.log('session_id: ' + session_id);
    const [listeningSessionId, setListeningSessionId] = useState(session_id);
    const [spotifyAuthLink, setSpotifyAuthLink] = useState(`${AUTH_URL}&state=${listeningSessionId}`);

    // TODO: store the listeningSessionId as a cookie so that it persists across page refreshes
    // This function generates a new listening session ID and updates the QR code
    const getNewSession = Math.random().toString(36).substring(2, 15);

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
            {/* TODO: POST users and session to the backend to be added to the db */}

            {/* JSON test */}
            {/* <div>
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
            </div> */}
            <QRCodeSVG value={spotifyAuthLink} style={qrCodeStyle} key={listeningSessionId} />
            <p>Scan the QR code to join the listening session. Or, click the button below to generate a new listening session.</p>
            <div>
                <Link style={buttonStyle} to={"/session_id/"+getNewSession}>New listening session</Link>
                <a style={buttonStyle} href={spotifyAuthLink}>Add user</a>
            </div>
        </div>
    );
}

export default QRHost;