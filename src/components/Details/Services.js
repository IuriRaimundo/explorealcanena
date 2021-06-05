import React from 'react';
// Icones
import iconAcessibilidade from '../../images/icons/servicos-acessibilidade.svg';
import iconWifi from '../../images/icons/servicos-wifi.svg';
import iconReserva from '../../images/icons/servicos-reservas.svg';
import iconRestaurante from '../../images/icons/servicos-restaurante.svg';
import iconTakeaway from '../../images/icons/servicos-takeaway.svg';
import iconGinásio from '../../images/icons/servicos-ginasio.svg';
import iconBar from '../../images/icons/servicos-bar.svg';

function Services({ services }) {
  // Como este componente utiliza os mesmos estilos do componente Details.js, utilizamos as mesmas classes CSS
  return (
    <section className='item-page-details services'>
      <h2>Serviços</h2>
      <ul className='item-page-details-items-wrapper'>
        {services.map((service, index) => {
          return <ServiceItem icon={servicesContent[service].icon} text={servicesContent[service].text} key={index} />;
        })}
      </ul>
    </section>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <li className='item-page-details-item'>
      <img src={icon} alt='icone' id='service-icon' />
      <p>{text}</p>
    </li>
  );
}

const servicesContent = {
  wifi: {
    icon: iconWifi,
    text: 'WiFi',
  },
  acessibilidade: {
    icon: iconAcessibilidade,
    text: 'Acessibilidade',
  },
  reserva: {
    icon: iconReserva,
    text: 'Reservas',
  },
  restaurante: {
    icon: iconRestaurante,
    text: 'Restaurante',
  },
  takeaway: {
    icon: iconTakeaway,
    text: 'Takeaway',
  },
  ginásio: {
    icon: iconGinásio,
    text: 'Ginásio',
  },
  bar: {
    icon: iconBar,
    text: 'Bar',
  },
};
export default Services;
