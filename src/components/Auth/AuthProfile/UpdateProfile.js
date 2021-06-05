import React, { useState, useRef } from 'react';
//Utils
import { useAuth } from '../../../utils/utils';
//CSS
import './AuthProfile.css';
// Icones
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';

function UpdateProfile({ setScreen }) {
  const { currentUser, setOpen, authOperations } = useAuth();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmRef = useRef('');
  const nameRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setMessage({
        message: 'As palavras-passe não correspondem.',
        class: 'auth-message-error',
      });
    }
    if (!nameRef.current.value && !passwordRef.current.value) {
      return setMessage({
        message: 'Preencha pelo menos um campo ou clique em cancelar.',
        class: 'auth-message-error',
      });
    }

    const promises = [];
    setLoading(true);
    setMessage('');

    if (nameRef.current.value) {
      promises.push(authOperations.updateName(nameRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(authOperations.updatePassword(passwordRef.current.value));
    }

    console.log(promises);

    Promise.all(promises)
      .then(() => {
        authOperations.logout();
        setScreen('login');
      })
      .catch(() => {
        setMessage({ message: 'Falha ao alterar perfil.', class: 'auth-message-error' });
        setLoading(false);
      });
  };

  return (
    <>
      <div className='auth-profile-header'>
        <h1>Alterar perfil</h1>
        <CloseIcon alt='fechar formulário de autenticação' id='auth-close-icon' onClick={() => setOpen(false)} />
      </div>
      <form
        className='auth-form'
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <ul className='auth-form-ul'>
          <li className='auth-message-warning'>
            Preencha estes campos com a informação que deseja alterar, não preencha o que não deseja alterar.
            <br />
            Após alterar o perfil terá de voltar a entrar.
          </li>
          {message && <li className={message.class}>{message.message}</li>}
          <li>
            <label htmlFor='name'>Novo nome</label>
            <input type='text' name='name' ref={nameRef} />
          </li>

          <li>
            <label htmlFor='password'>Nova palavra-passe</label>
            <input type='password' name='password' ref={passwordRef} autoComplete='current-password' />
          </li>
          <li>
            <label htmlFor='password'>Confirmar palavra-passe</label>
            <input type='password' name='password' ref={passwordConfirmRef} autoComplete='current-password' />
          </li>
          <li>
            <button
              id='auth-update-profile-button'
              onClick={() => {
                setScreen('update');
              }}
              type='submit'
              disabled={loading}
            >
              Alterar perfil
            </button>
            <button
              id='auth-logout-button'
              onClick={() => {
                setScreen('profile');
              }}
            >
              Cancelar
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default UpdateProfile;
