import React from 'react';
//CSS
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <p>a carregar</p>
      <div className='loading-screen-dots'>
        <span id='loading-screen-dot-1'></span>
        <span id='loading-screen-dot-2'></span>
        <span id='loading-screen-dot-3'></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
