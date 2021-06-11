import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
//Componentes
import ServiceIcons from './ServiceIcons';
import Button from '../Button/Button';
//CSS
import './CategoryPageItem.css';
//Utils
import { storageOperations } from '../../utils/utils';

function CategoryPageItem({ id, image, title, services, address, description }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageUrl, setImageUrl] = useState();
  const { path } = useRouteMatch();

  // useRef para manter os valores entre renderizações, uma vez que iremos modificar o valor desta variável no useEffect
  let truncatedDescription = useRef(truncateText(windowSize, description));

  // Esta função vai alterar o state windowSize para a largura atual do browser
  const checkWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    truncatedDescription.current = truncateText(windowSize, description);
    return () => {
      // Função de limpeza para evitar que sejam adicionados EventListeners infinitos
      window.removeEventListener('resize', checkWindowSize);
    };
  });

  useEffect(() => {
    if (path === '/eventos') {
      storageOperations.getImageURL('eventos', 'imagem-pequena', id).then((url) => {
        setImageUrl(url);
      });
    } else {
      storageOperations.getImageURL('places', 'imagem-pequena', id).then((url) => {
        setImageUrl(url);
      });
    }
  }, []);

  return (
    <>
      <div className={'category-page-item-container'}>
        <div className={'category-page-item-image'}>
          <Link to={`${path}/${id}`}>
            {imageUrl && <img src={imageUrl} alt='' />}
            <p className={'category-page-item-overlay'}>ver local</p>
          </Link>
        </div>
        <div className={'category-page-item-details'}>
          <div className={'category-page-item-details-first-row'}>
            <Link to={`${path}/${id}`}>
              <h2>{title}</h2>
            </Link>
          </div>
          <div className={'category-page-item-details-second-row'}>
            <strong>{address}</strong>
            <p>{truncatedDescription.current}</p>
          </div>
          <div className={'category-page-item-details-third-row'}>
            <Button text='VER MAIS' link={`${path}/${id}`} className={'button-1 category-page-item-button'} />
            <ServiceIcons services={services} />
          </div>
        </div>
      </div>
    </>
  );
}

// Esta função irá reduzir a descrição caso ela seja demasiado longa

const truncateText = (windowWidth, string) => {
  // Esta declaração vai limitar o tamanho de carateres na descrição dependendo da largura do browser, serve para reduzir o tamanho do texto em ecrãs pequenos
  if (windowWidth < 713) {
    if (string.length > 200) {
      return string.substring(0, 200) + '...';
    } else {
      return string;
    }
  } else if (windowWidth < 750) {
    if (string.length > 130) {
      return string.substring(0, 130) + '...';
    } else {
      return string;
    }
  } else if (windowWidth < 800) {
    if (string.length > 150) {
      return string.substring(0, 150) + '...';
    } else {
      return string;
    }
  } else if (windowWidth < 1000) {
    if (string.length > 200) {
      return string.substring(0, 190) + '...';
    } else {
      return string;
    }
  } else if (windowWidth > 1000) {
    if (string.length > 300) {
      return string.substring(0, 280) + '...';
    } else {
      return string;
    }
  }
};

export default CategoryPageItem;
