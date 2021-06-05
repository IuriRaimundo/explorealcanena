import React from 'react';
//Componentes
import Button from '../../components/Button/Button';
//CSS
import './ImageGallery.css';
//Imagens
import image1Import from '../../images/image-gallery/rio-alviela.jpg';
import image2Import from '../../images/image-gallery/janela-carsica-do-alviela.jpg';
import image3Import from '../../images/image-gallery/algar-de-abatimento-alviela.jpg';

// Objeto de imagem
class Image {
  constructor(image, alt, text, route) {
    this.image = image;
    this.alt = alt;
  }
}
// Imagens
const image1 = new Image(image1Import, 'Imagem do rio Alviela');
const image2 = new Image(image2Import, 'Janela cársica do Alviela');
const image3 = new Image(image3Import, 'Algar de abatimento do Alviela');

const images = [image1, image2, image3];

function ImageGallery(props) {
  return (
    <>
      <section className='section-wrapper'>
        <h1 ref={props.sectionRef}>{props.sectionTitle}</h1>
        <div className='section-container-image'>
          <img src={images[0].image} alt={images[0].alt} />
          <img src={images[1].image} alt={images[1].alt} />
          <img src={images[2].image} alt={images[2].alt} />
        </div>
        <Button text='VER GALERIA DE IMAGENS' link='/veja-alcanena' className='button-1 image-gallery-button' />
      </section>
    </>
  );
}

export default ImageGallery;
