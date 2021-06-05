import React, { useState, useRef } from 'react';
// CSS
import './Auth.css';
// Utils
import { useAuth } from '../../utils/utils';

function AuthLogInForm({ setScreen }) {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const { authOperations } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage('');
      setLoading(true); // para ativar o atributo disabled no botão do formulário
      await authOperations.login(emailRef.current.value, passwordRef.current.value);
      setScreen('profile'); // Ir para perfil após login
    } catch {
      setMessage({
        message: 'Email ou palavra-passe incorreto.',
        class: 'auth-message-error',
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className='auth-form'
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <ul className='auth-form-ul'>
          {message && <li className={message.class}>{message.message}</li>}
          <li>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' ref={emailRef} required />
          </li>
          <li>
            <label htmlFor='password'>Palavra-passe</label>
            <input type='password' name='password' ref={passwordRef} autoComplete='current-password' id='999088' required />
            <p className='auth-form-link' onClick={() => setScreen('resetPassword')}>
              Esqueceu-se da palavra passe?
            </p>
          </li>
          <li>
            <button type='submit' disabled={loading}>
              Entrar
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default AuthLogInForm;
