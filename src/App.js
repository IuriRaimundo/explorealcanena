import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Utils
import { ScrollToTop } from './utils/utils';
import { AuthProvider } from './utils/utils';
// Componente Auth
import Auth from './components/Auth/Auth';
//Páginas
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
const PaginaInicial = lazy(() => import('./pages/PaginaInicial/PaginaInicial'));
const PaginaDeCategoria = lazy(() => import('./pages/PaginaDeCategoria/PaginaDeCategoria'));
const PaginaEstatica = lazy(() => import('./pages/PaginaEstatica/PaginaEstatica'));

/* 
Router é o router da aplicação, é responsável por tomar conta dos diferentes
caminhos e apresentar páginas diferentes. 

O componente Route renderiza o que estiver dentro dele dependendo do caminho
que lhe for introduzido na propriedade "path", essencialmente serve para 
dividir a aplicação em páginas e muda automaticamente dependendo da url.

Switch faz com que somente o primeiro elemento parente seja renderizado,
neste caso faz com que renderize apenas uma página de cada vez. O que
melhora a performance da aplicação.

O componente Suspense juntamente com 'lazy()' permite-nos dividir o
código da aplicação. Por natureza todo o código da aplicação é compilado
em conjunto, o que aumenta o tempo de descarregamento inicial da aplicação.
Como esta aplicação não necessita de todo o código ao iniciar, nós dividimos
o código para que o mesmo seja descarregado somente quando for utilizado, 
efetivamente diminuindo o tempo de descarregamento inicial. "fallback" contém
o que será renderizado enquanto o navegador não descarregou o código dentro
do componente Suspense
*/

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <Auth />
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              <Route exact path='/' component={PaginaInicial} />

              <Route path='/património-natural' component={PaginaDeCategoria} />

              <Route path='/jardins-e-miradouros' component={PaginaDeCategoria} />

              <Route path='/património-cultural' component={PaginaDeCategoria} />

              <Route path='/restaurantes' component={PaginaDeCategoria} />

              <Route path='/pastelarias' component={PaginaDeCategoria} />

              <Route path='/cafés' component={PaginaDeCategoria} />

              <Route path='/alojamento' component={PaginaDeCategoria} />

              <Route path='/eventos' component={PaginaDeCategoria} />

              <Route path='/:page' component={PaginaEstatica} />
            </Switch>
          </Suspense>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
