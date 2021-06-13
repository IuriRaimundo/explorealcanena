import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//CSS
import './PaginaDeLocal.css';
//Componentes
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Details from '../../components/Details/Details';
import Services from '../../components/Details/Services';
import Suggestions from '../../components/Suggestions/Suggestions';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
// Funções
import { isPlaceOpen } from '../../components/Details/Schedule';
//Utils
import { storageOperations } from '../../utils/utils';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

function PaginaDeLocal({ data }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [showOpenLabel, setShowOpenLabel] = useState();
  const { name } = useParams();
  const selectedPlace = data ? getSelectedPlace(data, name) : null;

  useEffect(() => {
    // Somente aceder à firebase storage se existir o local
    if (selectedPlace) {
      storageOperations
        .getImageURL('places', 'imagens-grandes', name, selectedPlace.imagensGrandes)
        .then((urls) => {
          setImageUrls(urls);
        })
        .catch((err) => console.log(err));
    }
  }, [name, selectedPlace]);

  // Verificar se o horário existe
  useEffect(() => {
    let validSchedule = false;
    Object.entries(selectedPlace.horário).forEach((entry) => {
      if (entry[1] !== null) {
        validSchedule = true;
      }
    });
    setShowOpenLabel(validSchedule);
  }, [selectedPlace]);

  // Se não for existir nenhum local com o nome inserido na url, renderizar o componente PageNotFound
  if (!selectedPlace) {
    return <PageNotFound />;
  }

  let typeOfPlace; // Para determinar renderizações de diferentes tipos de locais
  let isOpen; // Para verificar se o local de tipo 1 está aberto ou fechado
  const categories = selectedPlace.categorias; // Para reduzir a quantidade de código

  if (
    categories.includes('restaurantes') ||
    categories.includes('cafés') ||
    categories.includes('cafés') ||
    categories.includes('alojamento')
  ) {
    typeOfPlace = 'type1';
    isOpen = isPlaceOpen(selectedPlace.horário);
  } else {
    typeOfPlace = 'type2';
  }

  return (
    <>
      <article className='item-page-wrapper'>
        <section className='item-page-left-col'>
          <div className='item-page-title'>
            <h1>{selectedPlace.nome}</h1>
            {showOpenLabel && typeOfPlace === 'type1' && isOpen ? ( // Verificar se o local é do tipo 1, pois os de tipo 2 não têm horário. Os locais de alojamento não têm horário então são excluidos.
              <h1 className='item-page-title-state'>
                <span>(</span>
                <span style={{ color: 'green' }}>aberto</span>
                <span>)</span>
              </h1>
            ) : (
              showOpenLabel &&
              typeOfPlace === 'type1' && (
                <h1>
                  <span>(</span>
                  <span style={{ color: '#ac0000' }}>fechado</span>
                  <span>)</span>
                </h1>
              )
            )}
          </div>
          <div className='left-col-2'>
            {imageUrls && <ImageCarousel slides={imageUrls} placeId={name} />}
            <p className='item-page-description'>{selectedPlace.descrição}</p>
            <LeafletMap coords={selectedPlace.coordenadas} name={selectedPlace.nome} />
          </div>
        </section>
        <div className='item-page-right-col'>
          <Details data={selectedPlace} />
          {
            // Somente locais do tipo 1 têm a aba de serviços
            typeOfPlace === 'type1' && selectedPlace.serviços.length !== 0 ? (
              <Services services={selectedPlace.serviços} />
            ) : (
              void 0
            )
          }
        </div>
      </article>
      <Suggestions data={data} selectedPlace={selectedPlace} />
    </>
  );
}

/*
Esta função vai procurar na array conseguida da base de dados por
um documento com o id igual aos parametros deste caminho, uma vez
que são iguais ao id do local correspondente.
*/

const getSelectedPlace = (data, params) => {
  let currentPlace;
  data.forEach((doc) => {
    if (doc.id === params) {
      currentPlace = doc;
    }
  });
  return currentPlace;
};

export default PaginaDeLocal;
