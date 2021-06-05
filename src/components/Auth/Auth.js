import React, { useState, useEffect, useRef } from 'react';
// CSS
import './Auth.css';
// Icones
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
// Componentes
import AuthSignInForm from './AuthSignInForm';
import AuthLogInForm from './AuthLogInForm';
import AuthProfile from './AuthProfile/AuthProfile';
import UpdateProfile from './AuthProfile/UpdateProfile';
import AuthResetPassword from './AuthResetPassword';
// Utils
import { useAuth } from '../../utils/utils';

function Auth() {
  const { currentUser, open, setOpen } = useAuth();
  const [screen, setScreen] = useState('login');
  const componentRef = useRef();

  const screens = {
    login: <AuthLogInForm setScreen={setScreen} />,
    signin: <AuthSignInForm setScreen={setScreen} />,
    profile: <AuthProfile setScreen={setScreen} />,
    update: <UpdateProfile setScreen={setScreen} />,
    resetPassword: <AuthResetPassword />,
  };

  const handleOutsideClick = (e) => {
    // Verificar se o clique foi fora do elemento com classe 'auth-wrapper'
    if (componentRef.current && !componentRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.getElementById('auth-overlay').addEventListener('click', (e) => handleOutsideClick(e));
    // Se houver uma sessão aberta, ir para  o ecrã de perfil
    if (currentUser) {
      setScreen('profile');
    }
    return document.getElementById('auth-overlay').removeEventListener('click', (e) => handleOutsideClick(e));
  }, [open]);

  return (
    <div className={open ? 'auth-overlay' : ''} id='auth-overlay'>
      <div className={open ? 'auth-wrapper auth-open' : 'auth-wrapper auth-closed'} id='auth' ref={componentRef}>
        {(screen === 'login' || screen === 'signin' || screen === 'resetPassword') && (
          <div className='auth-navigation'>
            <button onClick={() => setScreen('login')} style={screen === 'login' ? { backgroundColor: '#d2d2d2' } : null}>
              INICIAR SESSÃO
            </button>
            <button onClick={() => setScreen('signin')} style={screen === 'signin' ? { backgroundColor: '#d2d2d2' } : null}>
              REGISTRAR
            </button>
            <CloseIcon alt='fechar formulário de autenticação' id='auth-close-icon' onClick={() => setOpen(false)} />
          </div>
        )}

        {screens[screen]}
      </div>
    </div>
  );
}

export default Auth;
