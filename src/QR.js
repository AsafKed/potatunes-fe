import React from "react";
import QRCode from "react-qr-code";

// TODO - make this a scalable SVG image
function QR() {
    return (
        <div style={{ background: 'white', padding: '16px' }} >
            <div style={{ height: "auto", width: "auto", maxWidth: 512, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="http://facebook.github.io/react/"
                    viewBox={`0 0 256 256`}
                />
            </div>
        </div>
    );
}

export default QR;