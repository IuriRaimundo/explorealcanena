import React, { useState, useRef } from 'react';
// CSS
import './Auth.css';
// Utils
import { useAuth } from '../../utils/utils';

function AuthSignInForm({ setScreen }) {
  const { authOperations } = useAuth();
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('');
  const passwordConfirmRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setMessage({
        message: 'As palavras-passe não correspondem.',
        class: 'auth-message-error',
      });
    }

    try {
      setMessage('');
      setLoading(true); // para ativar o atributo disabled no botão do formulário
      await authOperations.signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      authOperations.logout();
      setScreen('login');
      setMessage({
        message: 'Conta criada com sucesso, verifique o seu email e entre na sua conta.',
        class: 'auth-message-success',
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setMessage({
        message: 'Falha ao criar uma nova conta.',
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
            <label htmlFor='name'>Nome</label>
            <input type='text' name='name' ref={nameRef} required />
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' ref={emailRef} required />
          </li>
          <li>
            <label htmlFor='password'>Palavra-passe</label>
            <input type='password' name='password' ref={passwordRef} autoComplete='new-password' required />
          </li>
          <li>
            <label htmlFor='password'>Confirmar palavra-passe</label>
            <input type='password' name='password' ref={passwordConfirmRef} autoComplete='new-password' required />
          </li>
          <li>
            <button type='submit' disabled={loading}>
              Registrar
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default AuthSignInForm;
