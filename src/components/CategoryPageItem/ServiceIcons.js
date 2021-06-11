import React from 'react';

//Imagens/Icones
import iconWifi from '../../images/icons/servicos-wifi.svg';
import iconReserva from '../../images/icons/servicos-reservas.svg';
import iconTakeaway from '../../images/icons/servicos-takeaway.svg';
import iconAcessibilidade from '../../images/icons/servicos-acessibilidade.svg';
import iconRestaurante from '../../images/icons/servicos-restaurante.svg';
import iconGinasio from '../../images/icons/servicos-ginasio.svg';
import iconBar from '../../images/icons/servicos-bar.svg';

function ServiceIcons({ services }) {
  if (services) {
    const iconsToDisplay = parseIcon(services);
    return (
      <span>
        {iconsToDisplay.map((icon, index) => {
          // Limitar o número de icones
          if (index === 4) return null;
          return <img src={icon} alt={icon} className='service-icon' key={icon} />;
        })}
      </span>
    );
  } else {
    return null;
  }
}

//Esta função irá associar os icones a dispor de acordo com os valores recebidos pela prop 'services'
const parseIcon = (services) => {
  let iconsToDisplay = [];
  services.map((service) => {
    switch (service) {
      case 'wifi':
        return iconsToDisplay.push(iconWifi);
      case 'reserva':
        return iconsToDisplay.push(iconReserva);
      case 'takeaway':
        return iconsToDisplay.push(iconTakeaway);
      case 'acessibilidade':
        return iconsToDisplay.push(iconAcessibilidade);
      case 'restaurante':
        return iconsToDisplay.push(iconRestaurante);
      case 'ginasio':
        return iconsToDisplay.push(iconGinasio);
      case 'bar':
        return iconsToDisplay.push(iconBar);
      default:
        break;
    }
    return void 0;
  });
  return iconsToDisplay;
};

export default ServiceIcons;
