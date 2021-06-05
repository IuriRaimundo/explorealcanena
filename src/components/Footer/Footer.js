import React from 'react';
//Componentes
import Button from '../Button/Button';
//CSS
import './Footer.css';
//Imagens
import facebook from '../../images/icons/footer-facebook.svg';
import twitter from '../../images/icons/footer-twitter.svg';
import pinterest from '../../images/icons/footer-pinterest.svg';
import instagram from '../../images/icons/footer-instagram.svg';
import youtube from '../../images/icons/footer-youtube.svg';

function Footer() {
  return (
    <footer>
      <h1>EXPLORE ALCANENA</h1>
      <section className='social-media'>
        <p>também disponível no</p>
        <span>
          <a href='https://www.youtube.com/channel/UCLGo7d5c0X5BuyLwSNXp9fg' target='_blank' rel='noreferrer'>
            <img src={youtube} alt='youtube' />
          </a>
          <a href='https://www.instagram.com/explorealcanena/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' />
          </a>
          <a href='https://www.facebook.com/explore.alcanena/' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook' />
          </a>
          <a href='https://twitter.com/EAlcanena' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='twitter' />
          </a>
          <a href='https://www.pinterest.pt/ealcanena/' target='_blank' rel='noreferrer'>
            <img src={pinterest} alt='pinterest' />
          </a>
        </span>
      </section>
      <section role='link'>
        <ul className='links'>
          <li>
            <Button text='Sobre nós' link='/sobre-nós' className='button-2' />
          </li>
          <li>
            <Button text='Contacto' link='/sobre-nós/contacto' className='button-2' />
          </li>
          <li>
            <Button text='Inscreva o seu negócio' link='/inscreva-o-seu-negócio' className='button-2' />
          </li>
          <li>
            <Button text='Requisitar alteração' link='/requisitar-alteração' className='button-2' />
          </li>
        </ul>
      </section>
      <p>© Explore Alcanena. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
