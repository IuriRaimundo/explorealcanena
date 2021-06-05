import React from 'react';
//CSS
import './Evento25DeAbril.css';

function Evento25DeAbril() {
  return (
    <>
      <article className='Evento25DeAbril-article'>
        <div className='Evento25DeAbril-info'>
          <h1>Comemoração do 25 de Abril</h1>
          <h2>23 de Abril - 25 de Abril</h2>
        </div>
        <img src={require('./imagens/25-de-abril.jpg').default} alt='Imagem de 25 de abril' />
        <p>
          Decorre, entre os dias 23 e 25 de abril, o programa de comemorações do 47º aniversário do 25 de Abril. A abrir o
          programa, estará o Concerto de Paulo Carvalho, no dia 23 de abril, sexta-feira, às 21:00h, no Cine-Teatro São Pedro. O
          espetáculo será transmitido em direto, nas páginas de{' '}
          <a href='https://pt-pt.facebook.com/tvminde/'>Facebook da TVMinde</a> e da
          <a href='https://pt-pt.facebook.com/CMAlcanena/'> Câmara Municipal de Alcanena</a>
          .
          <br />
        </p>
        <p>
          No sábado, dia 24 de abril, terá lugar, no jardim em frente à Biblioteca Municipal Dr. Carlos Nunes Ferreira, mais um
          Encontro de Poetas, dedicado aos Poemas de Abril. No dia 25 de abril de 2021, domingo, o programa terá início às 10:00h,
          nos Paços do Concelho (Praça 8 de Maio), com o Içar Solene da Bandeira, com Guarda de Honra pelos Bombeiros Municipais
          de Alcanena, Solta de Pombos e Distribuição de Cravos.
        </p>
        <p>
          Segue-se, às 10:30h a Sessão Solene Comemorativa do 47º Aniversário do 25 de Abril, no Cine-Teatro São Pedro, que
          contará com as intervenções da Presidente da Câmara Municipal de Alcanena, Fernanda Asseiceira, do Presidente da
          Assembleia Municipal de Alcanena, Silvestre Pereira, assim como dos representantes dos grupos políticos com assento na
          Assembleia Municipal.
        </p>
        <p>
          A sessão solene contará, ainda, com um momento cultural, estando o acesso do público limitado ao número de lugares
          disponíveis, de acordo com as recomendações da Direção-Geral da Saúde. A Sessão Solene Comemorativa do 47º Aniversário
          do 25 de Abril terá transmissão em direto, nas páginas de
          <a href='https://pt-pt.facebook.com/tvminde/'> Facebook da TVMinde</a> e da{' '}
          <a href='https://pt-pt.facebook.com/CMAlcanena/'> Câmara Municipal de Alcanena</a>.
        </p>
        <p>
          Nos dias 24 e 25 de abril, sábado e domingo, decorrerá, ao longo do dia, o programa de Animação Desportiva “25 de Abril
          a caminhar… ou a correr… ou a pedalar”. No âmbito deste programa, os participantes, mediante inscrição prévia, na
          <a href='https://forms.gle/1jYAGgEXde4pPT2NA'> plataforma</a>, poderão efetuar um dos 11 percursos da Rede Municipal de
          Percursos Pedestres, a caminhar, a correr ou a pedalar (ver programa próprio).
        </p>
      </article>
    </>
  );
}

export default Evento25DeAbril;
