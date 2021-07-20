import React from 'react';
import { useRouteMatch } from 'react-router-dom';
//Componentes
import Navbar from '../Navbar/Navbar';
//CSS
import './HeroHeader.css';

function HeroHeader() {
  const { url } = useRouteMatch();
  const routeDetails = getRouteDetails(url);
  // Importar imagem com o nome obtido com a função getRouteDetails
  const image = require(`../../images/headers/${routeDetails.backgroundImage}`).default;
  return (
    <header
      className={`hero-header`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
      }}
    >
      <Navbar />
      <h1 className='hero-title'>{routeDetails.title}</h1>
    </header>
  );
}

// Esta função irá retornar o título e o nome da imagem correspondente á página atual
const getRouteDetails = (route) => {
  const routeDetails = {
    default: {
      title: 'Explore Alcanena',
      backgroundImage: 'jardins-e-miradouros-header.jpg',
    },
    '/porquê-alcanena': {
      title: 'Porquê Alcanena',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/história': {
      title: 'História',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/veja-alcanena': {
      title: 'Veja Alcanena',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/património-natural': {
      title: 'Património Natural',
      backgroundImage: 'natureza-header.jpg',
    },
    '/jardins-e-miradouros': {
      title: 'Jardins e Miradouros',
      backgroundImage: 'jardins-e-miradouros-header.jpg',
    },
    '/património-cultural': {
      title: 'Património Cultural',
      backgroundImage: 'cultura-header.jpg',
    },
    '/restaurantes': {
      title: 'Restaurantes',
      backgroundImage: 'restaurantes-header.jpg',
    },
    '/pastelarias': {
      title: 'Pastelarias',
      backgroundImage: 'pastelarias-header.jpg',
    },
    '/cafés': {
      title: 'Cafés',
      backgroundImage: 'cafés-header.jpg',
    },
    '/alojamento': {
      title: 'Onde dormir?',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/eventos': {
      title: 'Eventos',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/sobre-nós': {
      title: 'Sobre nós',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/inscreva-o-seu-negócio': {
      title: 'Inscrições',
      backgroundImage: 'alojamento-header.jpg',
    },
    '/requisitar-alteração': {
      title: 'Requisitar alteração',
      backgroundImage: 'alojamento-header.jpg',
    },
  };
  return routeDetails[route] ? routeDetails[route] : routeDetails['default'];
};

export default HeroHeader;
