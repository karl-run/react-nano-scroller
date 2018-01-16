import React from 'react';

import style from './index.scss';

const ReactNanoSpinner = ({ className }) => (
  <div className={`nano-spinner-bounce ${style['nano-spinner-bounce']} ${className || ''}`.trim()}>
    <div className={style['bounce1']} />
    <div className={style['bounce2']} />
    <div className={style['bounce3']} />
  </div>
);

export default ReactNanoSpinner;
