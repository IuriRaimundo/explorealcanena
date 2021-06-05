import React from 'react';
//CSS
import './Evento8DeMaio.css';

function Evento8DeMaio() {
  return (
    <>
      <article className='Evento8DeMaio-article'>
        <div className='Evento8DeMaio-info'>
          <h1>107º Aniversário de Alcanena</h1>
          <h2>8 de maio, 2021 </h2>
        </div>
        <div className='Evento8DeMaio-content'>
          <img src={require('./imagens/8-de-maio.jpg').default} alt='Aniversário Alcanena' />
          <p>
            O município de Alcanena celebra neste mês de maio os seus 107 anos, com um extenso programa de eventos e atividades. O
            ponto alto é o concerto de Mariza este sábado, dia 8 de maio, dia do concelho. As atividades decorrem desde o dia 1 e
            prolongam-se até ao dia 31 de maio. Este sábado, além da sessão solene, decorrerá uma homenagem ao Serviço Nacional de
            Saúde, na pessoa do secretário de Estado, Lacerda Sales.
            <br />O dia 8 tem um programa oficial das celebrações dos 107 anos, com cartaz próprio, que inclui sessão solene e a
            fadista Mariza a atuar na praça 8 de Maio.
          </p>
        </div>
      </article>
    </>
  );
}

export default Evento8DeMaio;
