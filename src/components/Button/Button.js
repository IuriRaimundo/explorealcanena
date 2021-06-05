import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './Button.css';

function Button({ text, link, className }) {
  return (
    <Link
      to={link}
      onClick={() => {
        window.location.href = link;
        console.log('clicked');
      }}
    >
      <button className={className} role='link'>
        {text}
      </button>
    </Link>
  );
}

export default Button;
