import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//CSS
import './LeafletMap.css';

function LeafletMap({ coords, name }) {
  const [map, setMap] = useState();
  /*
  A posição do mapa não é possível modificar dinamicamente se não pela função flyTo ou setView
  flyTo cria uma animação então optamos por esta função
  A propriedade whenCreated está a atualizar o state map com uma referência ao elemento,
  por onde conseguimos obter acesso às funções do objeto map 
  */
  useEffect(() => {
    if (map) {
      map.map.flyTo(coords);
    }
  });

  if (coords && name) {
    return (
      <>
        <MapContainer center={coords} zoom={30} scrollWheelZoom={false} whenCreated={(map) => setMap({ map })}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={coords}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </>
    );
  } else {
    return null;
  }
}

export default LeafletMap;
