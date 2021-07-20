import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
//CSS
import './HeaderMainPage.css';

// Os parametros deste componentes contêm a referência das secções alvo.
function HeaderMainPage({ firstSectionRef, secondSectionRef, thirdSectionRef }) {
  const executeScroll = (clickedRef) => {
    // Ir até à secção alvo escolhida
    const position = clickedRef.current.getBoundingClientRect();
    window.scrollTo(0, position.y - 100);
  };
  return (
    <header className='main-hero'>
      <Navbar highlighted='' />
      <div className='main-hero-content'>
        <h1 className='main-hero-title'>EXPLORE ALCANENA</h1>
        <span id='explore' onClick={() => executeScroll(firstSectionRef)}>
          Explore
        </span>
        ,
        <span id='saboreie' onClick={() => executeScroll(secondSectionRef)}>
          {' '}
          Saboreie
        </span>
        ,
        <span id='admire' onClick={() => executeScroll(thirdSectionRef)}>
          {' '}
          Admire
        </span>
      </div>
    </header>
  );
}

export default HeaderMainPage;
