import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
//Componentes
import Dropdown from './Dropdown';
import Search from './Search/Search';
//Utils
import { useAuth } from '../../utils/utils';
//CSS
import './Navbar.css';
//ICONES
import barMenu from '../../images/icons/menu.svg';
import logo from '../../images/icons/logo1.png';
import dropdown from '../../images/icons/dropdown.svg';
import userIcon from '../../images/icons/usuário.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { path } = useRouteMatch();
  const highlighted = findCurrentPage(path);
  const { open, setOpen } = useAuth();
  const navRef = useRef();

  // Desativar scroll caso o menu estava aberto
  if (menu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    // Se o a janela do browser for maior do que 1200px, desativar menu
    if (window.innerWidth > 1200) {
      setMenu(false);
    }
  };

  return (
    <>
      <Link to='/'>
        <img src={logo} alt='Logotipo Explore Alcanena' id='logo-mobile' className='show-mobile' />
      </Link>
      <img
        src={barMenu}
        className='show-mobile'
        alt='Menu de navegação'
        id='hamburguer-menu-icon'
        onClick={() => setMenu(true)}
      />
      <nav className={menu ? 'nav-open' : ''} id='nav' ref={navRef}>
        {/* Caso a variavel menu seja verdadeira, adicionar classe que
         contém os estilos para o menu lateral, caso seja falsa,
        não adicionar classe.*/}
        <Link to='/'>
          <img src={logo} alt='Logotipo Explore Alcanena' id='logo' />
        </Link>
        <ul className='nav-menu'>
          <li id='close-menu'>
            <CloseIcon onClick={() => setMenu(false)} />
          </li>
          <li>
            <span
              id='nav-alcanena'
              className='nav-span'
              // Caso a página aberta pertenaça a esta categoria, alterar a cor da categoria
              style={{
                color: highlighted === 'nav-alcanena' ? '#f45a2b' : null,
              }}
            >
              Alcanena
              <img src={dropdown} alt='triangulo de dropdown' className='nav-dropdown-icon hide-mobile' />
            </span>
            <Dropdown firstItem='Porquê Alcanena?' secondItem='História' thirdItem='Veja Alcanena' />
          </li>

          <li className='navigation-item'>
            <span
              style={{
                color: highlighted === 'nav-o-que-visitar' ? '#f45a2b' : null,
              }}
            >
              O que visitar?
              <img src={dropdown} alt='triangulo de dropdown' className='nav-dropdown-icon hide-mobile' />
            </span>
            <Dropdown firstItem='Património Natural' secondItem='Jardins e Miradouros' thirdItem='Património Cultural' />
          </li>

          <li className='navigation-item'>
            <span
              style={{
                color: highlighted === 'nav-onde-comer' ? '#f45a2b' : null,
              }}
            >
              Onde comer?
              <img src={dropdown} alt='triangulo de dropdown' className='nav-dropdown-icon hide-mobile' />
            </span>
            <Dropdown firstItem='Restaurantes' secondItem='Pastelarias' thirdItem='Cafés' />
          </li>

          <li
            className='navigation-item no-dropdown menu-bold'
            style={{
              color: highlighted === 'nav-alojamento' ? '#f45a2b' : null,
            }}
          >
            <Link
              to='/alojamento'
              onClick={() => {
                // Forçar recarregamento da página para atualizar o DOM
                window.location.href = `/alojamento`;
              }}
            >
              Onde dormir?
            </Link>
          </li>

          <li
            className='navigation-item no-dropdown menu-bold'
            style={{
              color: highlighted === 'nav-eventos' ? '#f45a2b' : null,
            }}
          >
            <Link
              to='/eventos'
              onClick={() => {
                // Forçar recarregamento da página para atualizar o DOM
                window.location.href = `/eventos`;
              }}
            >
              Eventos
            </Link>
          </li>

          <li
            className='navigation-item show-mobile menu-bold'
            style={{
              color: highlighted === 'nav-sobre-nos' ? '#f45a2b' : null,
            }}
          >
            <Link to='/sobre-nós' onClick={() => setMenu(false)}>
              Sobre nós
            </Link>
          </li>
          <li
            className='navigation-item show-mobile menu-bold'
            id='nav-contacto'
            style={{
              color: highlighted === 'nav-contacto' ? '#f45a2b' : null,
            }}
          >
            <Link to='/sobre-nós/contacto' onClick={() => setMenu(false)}>
              Contacto
            </Link>
          </li>
        </ul>
        <Search menuState={menu} />
        <img src={userIcon} alt='icone de utilizador' className='auth-icon' onClick={() => setOpen(!open)} />
      </nav>
    </>
  );
}

/*
Esta função vai retornar uma string baseada na url, depois baseado nessa 
string um dos items da navegação irá ter uma cor diferente, essencialmente
 marcando a secção em que estamos 
*/

const findCurrentPage = (p) => {
  const pages = {
    '/porquê-alcanena': 'nav-alcanena',
    '/veja-alcanena': 'nav-alcanena',
    '/história': 'nav-alcanena',
    '/natureza': 'nav-o-que-visitar',
    '/jardins-e-miradouros': 'nav-o-que-visitar',
    '/cultura': 'nav-o-que-visitar',
    '/restaurantes': 'nav-onde-comer',
    '/pastelarias': 'nav-onde-comer',
    '/cafés': 'nav-onde-comer',
    '/alojamento': 'nav-alojamento',
    '/eventos': 'nav-eventos',
    '/sobre-nós': 'nav-sobre-nos',
  };
  return pages[p];
};

export default Navbar;
