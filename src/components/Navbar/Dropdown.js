import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import './Navbar.css';

// Cada item da lista recebe os valores atribuidos na sua colocação, 'Link to' retorna um elemento <a href="#"></a>

function Dropdown(props) {
  return (
    <>
      <ul className='dropdown'>
        {props.firstItem ? (
          <li>
            <Link
              to={`/${props.firstItem.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => {
                window.location.href = `/${props.firstItem
                  .toLowerCase()
                  .replace(/ /g, '-')}`; /* Forçar recarregamento da página para atualizar o DOM */
              }}
            >
              {props.firstItem}
            </Link>
          </li>
        ) : null}
        {props.secondItem ? (
          <li>
            <Link
              to={`/${props.secondItem.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => {
                window.location.href = `/${props.secondItem.toLowerCase().replace(/ /g, '-')}`;
              }}
            >
              {props.secondItem}
            </Link>
          </li>
        ) : null}
        {props.thirdItem ? (
          <li>
            <Link
              to={`/${props.thirdItem.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => {
                window.location.href = `/${props.thirdItem.toLowerCase().replace(/ /g, '-')}`;
              }}
            >
              {props.thirdItem}
            </Link>
          </li>
        ) : null}
      </ul>
    </>
  );
}

export default Dropdown;
