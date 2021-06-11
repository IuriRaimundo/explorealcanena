import React, { useState, useEffect } from 'react';
//Utils
import { firestoreOperations, useAuth } from '../../../../utils/utils';
//CSS
import './FormularioAlterar.css';

function FormularioAlterar() {
  const { currentUser, setOpen } = useAuth();
  const [places, setPlaces] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    // Conseguir nome dos locais
    firestoreOperations.getAllPlacesName().then((result) => setPlaces(result));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!currentUser) {
      setOpen(true);
      setMessage({
        message: 'É necessário iniciar sessão com uma conta verificada para submeter.',
        class: 'message-error',
      });
      setTimeout(() => setMessage(), 5000);

      return;
    }
    if (!currentUser.emailVerified) {
      setMessage({
        message: 'É necessário confirmar o email da sua conta para submeter formulários.',
        class: 'message-error',
      });
      setTimeout(() => setMessage(), 5000);

      return;
    }
    // Conseguir um id único baseado na hora de envio
    const date = new Date();
    const docId = 'pedido-de-alteração-' + date.getTime();
    const data = {
      id: docId,
      nomeDoRemetente: currentUser.displayName,
      emailDoRemetente: currentUser.email,
      nome: e.target[0].value,
      pedido: e.target[1].value,
    };

    // Adicionar informação do formulário para a coleção 'pedidosDeAlteracao'
    try {
      setLoading(true);
      firestoreOperations.addDocument('pedidosDeAlteracao', data, docId);
      setMessage({
        message: 'Formulário submetido com sucesso! Iremos lhe contactar por email em breve.',
        class: 'message-success',
      });
      // Limpar formulário
      e.target[0].value = '';
      e.target[1].value = '';
    } catch {
      setMessage({
        messsage: 'Formulário não submetido, tente mais tarde.',
        class: 'message-error',
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(), 5000);
    }
  };
  return (
    <>
      <section className='formulário-alterar-section'>
        <form className='formulário' onSubmit={(e) => handleSubmit(e)}>
          <ul className='form-ul'>
            <h1>Pedido</h1>
            <li>
              <label htmlFor='categoria'>Selecione o local</label>
              <select name='categoria' required>
                <option value=''>Escolha uma das opções</option>
                {places
                  ? places.map((n, index) => {
                      return (
                        <option value={n} key={index}>
                          {n}
                        </option>
                      );
                    })
                  : void 0}
              </select>
            </li>
            <li>
              <label htmlFor='pedido'>O que pretende que seja alterado?</label>
              <textarea type='text' name='pedido' required />
            </li>
            {message && <p className={message.class}>{message.message}</p>}
            <li>
              <button type='submit' id='submit-button' disabled={loading}>
                Submeter pedido
              </button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
}

export default FormularioAlterar;
