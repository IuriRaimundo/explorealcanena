import React, { useEffect, useState } from 'react';
//Utils
import { useAuth } from '../../../utils/utils';
//CSS
import './AuthProfile.css';
//Icones
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';

function AuthProfile({ setScreen }) {
  const { currentUser, setOpen, authOperations } = useAuth();
  const [message, setMessage] = useState();

  useEffect(() => {
    currentUser === 'null' ? setScreen('login') : void 0;
    if (currentUser && !currentUser.emailVerified) {
      setMessage({
        message: 'Esta conta não está verificada, para submeter formulários é necessário confirmar o endereço de email.',
        class: 'auth-message-error',
      });
    }
    if (currentUser && currentUser.emailVerified) {
      setMessage({
        message: 'Esta conta está verificada, agora já pode submeter formulários.',
        class: 'auth-message-success',
      });
    }
  }, [currentUser]);

  return (
    <>
      <div className='auth-profile-header'>
        <h1>Perfil</h1>
        <CloseIcon alt='fechar formulário de autenticação' id='auth-close-icon' onClick={() => setOpen(false)} />
      </div>
      <div className='auth-profile-body'>
        <div className='auth-profile-details'>
          <h2>Nome</h2>
          <p>{currentUser && currentUser.displayName}</p>
        </div>
        <div className='auth-profile-details'>
          <h2>Email</h2>
          <p>{currentUser && currentUser.email}</p>
        </div>
        {message && <p className={message.class}>{message.message}</p>}
        <div className='auth-profile-buttons'>
          <button
            id='auth-update-profile-button'
            onClick={() => {
              setScreen('update');
            }}
          >
            Alterar perfil
          </button>
          <button
            id='auth-logout-button'
            onClick={() => {
              setScreen('login');
              authOperations.logout();
            }}
          >
            Terminar sessão
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthProfile;
