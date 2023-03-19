import React from 'react';
import { useState } from 'react';
import JSONViewer from 'react-json-viewer';

import SessionLogin from '../components/SessionLogin';

function QRHost() {
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
        <div>
            <SessionLogin />

            {/* JSON test */}
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
        </div>
    );
}

export default QRHost;