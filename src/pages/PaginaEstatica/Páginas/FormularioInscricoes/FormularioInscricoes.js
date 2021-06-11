import React, { useState } from 'react';
//Utils
import { useAuth, firestoreOperations } from '../../../../utils/utils';
//CSS
import './FormularioInscricoes.css';

function FormularioInscricoes() {
  const { currentUser, setOpen } = useAuth();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();

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
    const docId = 'inscrição-' + date.getTime();

    const data = {
      id: docId,
      nomeDoRemetente: currentUser.displayName,
      emailDoRemetente: currentUser.email,
      nome: e.target[0].value,
      morada: e.target[1].value,
      descrição: e.target[2].value,
      categoria: e.target[3].value,
      timestamp: new Date().getTime(),
    };

    // Adicionar informação do formulário para a coleção 'inscricoes'
    try {
      setLoading(true);
      firestoreOperations.addDocument('inscricoes', data, docId);
      setMessage({
        message: 'Formulário submetido com sucesso! Iremos lhe contactar por email em breve.',
        class: 'message-success',
      });
      // Limpar formulário
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
      e.target[3].value = '';
    } catch {
      setMessage({
        messsage: 'Formulário não submetido, tente mais tarde.',
        class: 'message-error',
      });
    } finally {
      setTimeout(() => setMessage(), 5000);
      setLoading(false);
    }
  };
  return (
    <>
      <section className='formulário-inscrições-section'>
        <form className='formulário' onSubmit={(e) => handleSubmit(e)}>
          <ul className='form-ul'>
            <h1>Informação do estabelecimento</h1>
            <li>
              <label htmlFor='nome'>Nome</label>
              <input type='text' name='nome' required />
            </li>
            <li>
              <label htmlFor='morada'>Morada</label>
              <input type='text' name='morada' required />
            </li>
            <li>
              <label htmlFor='descrição'>Descrição</label>
              <textarea type='text' name='descrição' required />
            </li>
            <li>
              <label htmlFor='categoria'>Tipo de estabelecimento</label>
              <select name='categoria' required>
                <option value=''>Escolha uma das opções</option>
                <option value='restaurantes'>Restaurante</option>
                <option value='cafés'>Café</option>
                <option value='pastelarias'>Pastelaria</option>
                <option value='outro'>Outro</option>
              </select>
            </li>
            {message && <p className={message.class}>{message.message}</p>}
            <li>
              <button type='submit' id='submit-button' disabled={loading}>
                Inscrever
              </button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
}

export default FormularioInscricoes;
