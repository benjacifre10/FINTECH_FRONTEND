import React from 'react';

import './Backdrop.css';

const Backdrop = ({ backdropClick }) => (
    <div className="backdrop" onClick={backdropClick}/>
);

export default Backdrop;
