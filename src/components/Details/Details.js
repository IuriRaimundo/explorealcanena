import React from 'react';
//Componentes
import { Schedule } from './Schedule';
//CSS
import './Details.css';
//Icones
import morada from '../../images/icons/detalhes-morada.svg';
import telefone from '../../images/icons/detalhes-telefone.svg';
import website from '../../images/icons/detalhes-website.svg';
import facebook from '../../images/icons/detalhes-facebook.svg';
import email from '../../images/icons/detalhes-email.svg';
import booking from '../../images/icons/detalhes-booking.svg';
import horário from '../../images/icons/detalhes-horario.svg';

function Details(data) {
  if (data) {
    const details = data.data;
    let showSchedule = false;

    // Verificar se existe horário
    Object.entries(details.horário).forEach((key) => {
      if (key[1] !== null) {
        showSchedule = true;
      }
    });

    return (
      <section className='item-page-details'>
        <h2>Detalhes</h2>
        <ul className='item-page-details-items-wrapper'>
          {details.morada && <DetailItem icon={morada} text={details.morada} />}
          {details.telefone && <DetailItem icon={telefone} text={details.telefone} />}
          {details.website && <DetailItem icon={website} text={details.website} />}
          {details.facebook && <DetailItem icon={facebook} text={details.facebook} />}
          {details.email && <DetailItem icon={email} text={details.email} />}
          {showSchedule && <DetailItem icon={horário} text={details.horário} />}
          {details.booking && <DetailItem icon={booking} text={details.booking} />}
        </ul>
      </section>
    );
  }
}

const DetailItem = ({ icon, text }) => {
  if (typeof text === 'object' && text != null) {
    return <Schedule icon={icon} data={text} />;
  }
  return (
    <li className='item-page-details-item'>
      {icon === website || icon === facebook ? (
        <>
          <img src={icon} alt={icon} />
          <a href={`https://www.${text}`} target='_blank' rel='noreferrer'>
            {text}
          </a>
        </>
      ) : icon === email ? (
        <>
          <img src={icon} alt={icon} />
          <a href={`mailto: ${text}`}>{text}</a>
        </>
      ) : icon === booking ? (
        <>
          <img src={icon} alt={icon} />
          <a href={`https://www.${text}`} target='_blank' rel='noreferrer'>
            Booking
          </a>
        </>
      ) : (
        <>
          <img src={icon} alt={icon} />
          <p>{text}</p>
        </>
      )}
    </li>
  );
};

export default Details;
