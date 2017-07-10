import React from 'react';

import './index.css';

const ReactNanoSpinner = ({ className }) => (
  <div className={`nano-spinner-bounce ${className || ''}`.trim()}>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

export default ReactNanoSpinner;
