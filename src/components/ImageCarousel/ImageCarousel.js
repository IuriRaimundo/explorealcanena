import React, { useState, useEffect } from 'react';
//CSS
import './ImageCarousel.css';
//Icones
import carouselArrow from '../../images/icons/image-carousel-arrow.svg';

function ImageCarousel({ slides, placeId }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Para voltar ao primeiro slide quando a página é trocada
  useEffect(() => {
    setCurrent(0);
  }, [slides]);

  useEffect(() => {
    // Tornar todos os elementos do mapa do carrossel brancos
    document.querySelector('.image-carousel-map')?.childNodes.forEach((element) => {
      element.style.backgroundColor = '#fff';
    });
    // Selecionar o elemento do mapa correspondente á imagem atual e alterar a sua cor
    const currentSpan = document.getElementById(`map-${current}`);
    if (currentSpan) {
      currentSpan.style.backgroundColor = '#f45a2b';
    }
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='image-carousel'>
      <img src={carouselArrow} className='left-arrow' onClick={prevSlide} alt='seta do carrossel de imagens' />
      <img src={carouselArrow} className='right-arrow' onClick={nextSlide} alt='seta do carrossel de imagens' />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide} alt='imagem do local' className='image-carousel-image' />}
          </div>
        );
      })}
      <div className='image-carousel-map'>
        {slides.map((slide, index) => {
          return <span key={index} id={`map-${index}`} style={index === current ? { color: '#f45a2b' } : void 0}></span>;
        })}
      </div>
    </section>
  );
}

export default ImageCarousel;
