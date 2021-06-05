import React from 'react';
//CSS
import './PaginaNaoEncontrada.css';
//Componentes
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

function PaginaNaoEncontrada() {
  return (
    <>
      <HeroHeader />
      <PageNotFound />
      <Footer />
    </>
  );
}

export default PaginaNaoEncontrada;
