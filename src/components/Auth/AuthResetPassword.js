import React, { useRef, useState } from 'react';
// CSS
import './Auth.css';
// Utils
import { useAuth } from '../../utils/utils';

function AuthResetPassword() {
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const emailRef = useRef();
  const { authOperations } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await authOperations.resetPassword(emailRef.current.value);
      setMessage({
        message: 'Foi enviado um email com uma ligação para alterar a sua palavra-passe.',
        class: 'auth-message-success',
      });
      setLoading(false);
    } catch {
      setMessage({
        message: 'Este email não corresponde a nenhuma conta. Verifique se introduziu o email correto.',
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
          setMessage('');
        }}
      >
        <ul className='auth-form-ul'>
          <h2>Recuperar conta</h2>
          <li>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' ref={emailRef} required />
          </li>
          {message && <li className={message.class}>{message.message}</li>}
          <li>
            <button type='submit' disabled={loading}>
              enviar email de recuperação
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default AuthResetPassword;
