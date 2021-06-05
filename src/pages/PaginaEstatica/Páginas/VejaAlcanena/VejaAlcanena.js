import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import './VejaAlcanena.css';
//Imagens
import images from './images';

function VejaAlcanena() {
  return (
    <>
      <section className='image-gallery'>
        {images
          ? images.map((image) => {
              return (
                <div className='image-gallery-image'>
                  <Link to={image.route}>
                    <img src={image.image} alt={image.alt} />
                    <p className='image-gallery-overlay'>{image.text}</p>
                  </Link>
                </div>
              );
            })
          : void 0}
      </section>
    </>
  );
}

export default VejaAlcanena;
