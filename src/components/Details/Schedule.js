import React, { useState } from 'react';
//CSS
import './Details.css';
//Icon
import dropdownIcon from '../../images/icons/dropdown-black.svg';

function Schedule({ icon, data }) {
  const [menu, setMenu] = useState(false);

  // Referencia para o horário de cada dia
  const week = {
    0: data['domingo'],
    1: data['segunda-feira'],
    2: data['terça-feira'],
    3: data['quarta-feira'],
    4: data['quinta-feira'],
    5: data['sexta-feira'],
    6: data['sábado'],
  };
  // Conseguir dia da semana atual, em número
  const date = new Date().getDay();
  // Aceder à referência correspondente ao dia atual.
  let currentDay = week[date];

  return (
    <li className='schedule-wrapper'>
      <div className='schedule-main'>
        <img src={icon} alt='' />
        <div className='schedule-current-day'>
          {currentDay ? (
            <p>
              {currentDay[0]} - {currentDay[1]} (GMT)
            </p>
          ) : (
            <p>Fechado</p>
          )}
          <img
            src={dropdownIcon}
            alt='dropdown'
            className={menu ? 'schedule-dropdown-btn schedule-dropdown-btn-open' : 'schedule-dropdown-btn'}
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
      <ScheduleDropdown data={data} state={menu} />
    </li>
  );
}

function ScheduleDropdown({ data, state }) {
  if (state) {
    return (
      <>
        <ul className='details-schedule-dropdown'>
          <li className='details-schedule-item'>
            <p>Segunda-feira</p>
            {data['segunda-feira'] ? (
              <p>
                {data['segunda-feira'][0]} - {data['segunda-feira'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Terça-feira</p>
            {data['terça-feira'] ? (
              <p>
                {data['terça-feira'][0]} - {data['terça-feira'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Quarta-feira</p>
            {data['quarta-feira'] ? (
              <p>
                {data['quarta-feira'][0]} - {data['quarta-feira'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Quinta-feira</p>
            {data['quinta-feira'] ? (
              <p>
                {data['quinta-feira'][0]} - {data['quinta-feira'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Sexta-feira</p>
            {data['sexta-feira'] ? (
              <p>
                {data['sexta-feira'][0]} - {data['sexta-feira'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Sábado</p>
            {data['sábado'] ? (
              <p>
                {data['sábado'][0]} - {data['sábado'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
          <li className='details-schedule-item'>
            <p>Domingo</p>
            {data['domingo'] ? (
              <p>
                {data['domingo'][0]} - {data['domingo'][1]}
              </p>
            ) : (
              <p style={{ color: '#ac0000' }}>Encerrado</p>
            )}
          </li>
        </ul>
      </>
    );
  } else {
    return null;
  }
}
const isPlaceOpen = (data) => {
  // Referencia para o horário de cada dia
  const week = {
    0: data['domingo'],
    1: data['segunda-feira'],
    2: data['terça-feira'],
    3: data['quarta-feira'],
    4: data['quinta-feira'],
    5: data['sexta-feira'],
    6: data['sábado'],
  };
  // Conseguir dia da semana atual, em número
  const date = new Date().getDay();
  // Aceder à referência correspondente ao dia atual.
  let currentDay = week[date];

  if (currentDay !== null) {
    const time = new Date(); // conseguir data atual
    let currentDate = `${time.getUTCFullYear()}/${time.getUTCMonth() + 1}/${time.getUTCDate()}`; // converter a data atual para string
    let currentTime = Math.round(new Date(time).getTime() / 1000); // conseguir data para segundos

    // juntar string da data atual com as horas, para ficar 'AAAA/MM/DD 00:00:00', para conseguir obter o valor do tempo
    let openingTime = Math.round(new Date(`${currentDate} ${currentDay[0]}:00`).getTime() / 1000); // currentDay[0] para conseguir o horário de abertura
    let closingTime = Math.round(new Date(`${currentDate} ${currentDay[1]}:00`).getTime() / 1000); // currentDay[1] para conseguir o horário de fechar

    // Se o tempo atual for depois da hora de abrir e antes da hora de fechar, retornar verdadeiro, se não, retornar falso
    if (openingTime < currentTime && currentTime < closingTime) {
      return true;
    } else {
      return false;
    }
  }
};
export { Schedule, isPlaceOpen };
