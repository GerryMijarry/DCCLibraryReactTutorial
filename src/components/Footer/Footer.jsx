import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0}}>
                <div className="titlebar-nav">
                    <h1> &copy; dCC </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;