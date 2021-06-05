import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './SobreNos.css';
//Icones
import iconEmail from '../../../../images/icons/sobre-nós-email.svg';
import iconFacebook from '../../../../images/icons/sobre-nós-facebook.svg';
import iconInstagram from '../../../../images/icons/sobre-nós-instagram.svg';
import iconAlterar from '../../../../images/icons/sobre-nós-alterar.svg';
import iconInscrever from '../../../../images/icons/sobre-nós-inscrever.svg';
import iconCamara from '../../../../images/icons/sobre-nós-camara.svg';

function SobreNos() {
  const { href } = window.location; // Conseguir url

  // Caso a url contenha 'contacto', fazer scroll até a secção dos contactos
  useEffect(() => {
    if (href.includes('contacto')) {
      console.log(true);
      const sectionRef = document.getElementById('contacto');
      const sectionRefY = sectionRef.getBoundingClientRect().y; // Conseguir posição Y do elemento
      // Executar o scroll após 200ms para evitar conflito com o scroll padrão da aplicação
      setTimeout(() => {
        window.scrollTo(0, sectionRefY - 50);
      }, 100);
    } else {
      console.log(false);
    }
  });
  return (
    <>
      <article className='sobre-nós-article'>
        <h1 className='sobre-nós-h1'>Quem somos?</h1>
        <p className='sobre-nós-p'>
          O Explore Alcanena foi criado por mim, Iúri João Mira Raimundo.
          <br /> Criei esta plataforma para a prova de aptidão profissional do meu curso profissional de Técnico de Multimédia que
          frequentei na Escola Secundária de Alcanena.
        </p>
        <h1 className='sobre-nós-h1'>Porquê?</h1>
        <p className='sobre-nós-p'>
          De inicio comecei este projeto somente por acreditar que criar uma plataforma deste tipo para Alcanena seria um bom
          projeto final para o meu curso.
          <br /> No entanto no decorrer do projeto eu descobri muito mais sobre Alcanena, e eu apercebi-me da sua beleza e queria
          ajudar as pessoas a terem uma experiência de descoberta e exploração semelhante à minha durante o desenvolvimento desta
          plataforma.
        </p>

        <section className='sobre-nós-section' id='contacto'>
          <h1 className='sobre-nós-h1'>Contacto</h1>
          <div className='sobre-nós-flexbox'>
            <div className='sobre-nós-flex-item'>
              <a href='mailto: explorealcanena@gmail.com'>
                <img src={iconEmail} alt='email' />
                <p>explorealcanena@gmail.com</p>
              </a>
            </div>
            <div className='sobre-nós-flex-item'>
              <a href='https://www.facebook.com/explore.alcanena/' target='_blank' rel='noreferrer'>
                <img src={iconFacebook} alt='facebook' />
                <p>facebook.com/explore.alcanena/</p>
              </a>
            </div>
            <div className='sobre-nós-flex-item'>
              <a href='https://www.instagram.com/explorealcanena/' target='_blank' rel='noreferrer'>
                <img src={iconInstagram} alt='instagram' />
                <p>@explorealcanena</p>
              </a>
            </div>
          </div>
        </section>

        <section className='sobre-nós-section'>
          <h1 className='sobre-nós-h1'>Serviços</h1>
          <h3 className='sobre-nós-serviços-h3'>Pode contactar-nos para</h3>
          <div className='sobre-nós-flexbox'>
            <div className='sobre-nós-flex-item'>
              <Link to='/requisitar-alteração'>
                <img src={iconAlterar} alt='icone de alterar' />
                <h3>Requisitar alteração no conteúdo do seu estabelecimento</h3>
              </Link>
            </div>
            <div className='sobre-nós-flex-item'>
              <Link to='/inscreva-o-seu-negócio'>
                <img src={iconInscrever} alt='icone de inscrever' />
                <h3>Inscrever o seu estabelecimento na plataforma</h3>
              </Link>
            </div>
            <div className='sobre-nós-flex-item'>
              <a href='mailto: explorealcanena@gmail.com?subject=Serviço de captura de imagens'>
                <img src={iconCamara} alt='icone de câmara' />
                <h3>Captura de imagens de alta qualidade para o seu estabelecimento</h3>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
export default SobreNos;
