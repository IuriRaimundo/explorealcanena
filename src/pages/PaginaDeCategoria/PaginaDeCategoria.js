import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
//CSS
import './PaginaDeCategoria.css';
//Utils
import { firestoreOperations } from '../../utils/utils';
import ScrollToTop from '../../utils/ScrollToTop';
//Componentes
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import CategorySuggestions from '../../components/CategorySuggestions/CategorySuggestions';
import CategoryPageItem from '../../components/CategoryPageItem/CategoryPageItem';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
// Página de local
const PaginaDeLocal = lazy(() => import('../PaginaDeLocal/PaginaDeLocal'));
// Página de evento
const PaginaDeEvento = lazy(() => import('../PaginaDeEvento/PaginaDeEvento'));

function PaginaDeCategoria() {
  const [places, setPlaces] = useState([]);
  const { path } = useRouteMatch();
  const category = path.replace('/', ''); // Retirar '/' da url

  // Buscar locais da base de dados quando a url mudar
  useEffect(() => {
    if (category === 'eventos') {
      firestoreOperations.fetchEvents().then((result) => {
        setPlaces(result);
      });
    } else {
      // URLs que não correspondem com nomes de categoria
      const urlExceptions = {
        'património-natural': 'natureza',
        'património-cultural': 'cultura',
      };

      if (urlExceptions[category]) {
        firestoreOperations.fetchCategoryPlaces(urlExceptions[category]).then((result) => {
          setPlaces(result);
        });
      } else {
        firestoreOperations.fetchCategoryPlaces(category).then((result) => {
          setPlaces(result);
        });
      }
    }
  }, [category]);

  return (
    <>
      <HeroHeader />
      <Router>
        <ScrollToTop />
        <Switch>
          <Suspense fallback={<LoadingScreen />}>
            <Route exact path={path}>
              <div className='category-page'>
                <div className='category-items'>
                  {places.length > 0 // Se a array places receber os dados, esta condição será verdadeira
                    ? places.map((place) => (
                        <CategoryPageItem
                          key={place.id}
                          id={place.id}
                          title={place.nome}
                          address={place.morada ? place.morada : place.data /* place.data para eventos */}
                          image={place.imagemPequena}
                          services={place.serviços}
                          description={place.descrição}
                        />
                      ))
                    : void 0}
                </div>
                <CategorySuggestions currentCategory={category} />
              </div>
            </Route>

            <Route exact path={`${path}/:name`}>
              {places.length > 0 && category === 'eventos' ? <PaginaDeEvento data={places} /> : void 0}
              {places.length > 0 && category !== 'eventos' ? <PaginaDeLocal data={places} /> : void 0}
            </Route>
          </Suspense>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default PaginaDeCategoria;
