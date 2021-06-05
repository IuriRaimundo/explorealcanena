import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
//Componentes
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
//Páginas dos eventos
const Evento25DeAbril = lazy(() => import('./Eventos/Evento25DeAbril/Evento25DeAbril'));
const Evento8DeMaio = lazy(() => import('./Eventos/Evento8DeMaio/Evento8DeMaio'));

function PaginaDeEvento({ data }) {
  // Conseguir o nome do evento selecionado
  const { name } = useParams();
  // Retornar componente da página retornado da função pageDispatcher
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>{pageDispatcher(name)}</Suspense>
    </>
  );
}

const pageDispatcher = (name) => {
  // Inserir páginas do evento aqui, sendo o parâmetro o id do evento e o valor o componente do evento
  const pages = {
    default: <PageNotFound />,
    '25-de-abril': <Evento25DeAbril />,
    '8-de-maio': <Evento8DeMaio />,
  };
  // Se não existir um parâmetro com o nome recebido, retornar o parâmetro 'default'
  return pages[name] ? pages[name] : pages.default;
};

export default PaginaDeEvento;
