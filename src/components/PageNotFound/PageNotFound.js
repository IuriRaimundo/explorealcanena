import React from 'react';
//CSS
import './PageNotFound.css';
//Componentes
import Button from '../../components/Button/Button';

function PageNotFound() {
  return (
    <section className='pagina-nao-encontrada'>
      <h1>Página não encontrada</h1>
      <Button text='Voltar à página inicial' link='/' className='button-2-no-hover' />
    </section>
  );
}

export default PageNotFound;
