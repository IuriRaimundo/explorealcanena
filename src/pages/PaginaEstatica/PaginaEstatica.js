import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
//Componentes
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
//Conteúdo das páginas estáticas
const PorqueAlcanena = lazy(() => import('./Páginas/PorqueAlcanena/PorqueAlcanena'));
const HistoriaDeAlcanena = lazy(() => import('./Páginas/HistoriaDeAlcanena/HistoriaDeAlcanena'));
const VejaAlcanena = lazy(() => import('./Páginas/VejaAlcanena/VejaAlcanena'));
const SobreNos = lazy(() => import('./Páginas/SobreNos/SobreNos'));
const FormularioInscricoes = lazy(() => import('./Páginas/FormularioInscricoes/FormularioInscricoes'));
const FormularioAlterar = lazy(() => import('./Páginas/FormularioAlterar/FormularioAlterar'));

function PaginaEstatica() {
  // Conseguir valor inserido na url após /
  const { page } = useParams();
  return (
    <>
      <HeroHeader />
      <Suspense fallback={<LoadingScreen />}>{contentSelector(page)}</Suspense>
      <Footer />
    </>
  );
}

// Esta função irá retornar o componente com o conteúdo para a página dependendo da url
const contentSelector = (p) => {
  const pages = {
    default: <PageNotFound />,
    'porquê-alcanena': <PorqueAlcanena />,
    história: <HistoriaDeAlcanena />,
    'veja-alcanena': <VejaAlcanena />,
    'sobre-nós': <SobreNos />,
    'inscreva-o-seu-negócio': <FormularioInscricoes />,
    'requisitar-alteração': <FormularioAlterar />,
  };
  return pages[p] ? pages[p] : pages.default;
};

export default PaginaEstatica;
