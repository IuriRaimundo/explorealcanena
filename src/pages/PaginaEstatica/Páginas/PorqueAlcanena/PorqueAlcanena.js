import React from 'react';
//CSS
import './PorqueAlcanena.css';
//Componentes
import CategoryContainer from '../../../../components/CategoryContainer/CategoryContainer';

/* 
  Insira o conteúdo da página dentro deste componente,
  caso pretenda pode importar componentes partilhados mas
  tenha o cuidado de passar as props necessárias para a
  funcionalidade do componente. Está mais informação sobre
  páginas estáticas na documentação.
*/
function PorqueAlcanena() {
  return (
    <>
      <article className='porque-alcanena-article'>
        <h1 className='porque-alcanena-h1'>É uma localidade interessante</h1>
        <p className='porque-alcanena-paragraph'>
          Alcanena é uma localidade com muito a oferecer, desde restaurantes a grutas, Alcanena tem mais do que o suficiente para
          proporcionar uma viajem interessante e agradável.
        </p>
        <h1 className='porque-alcanena-h1'>Preço acessível</h1>
        <p className='porque-alcanena-paragraph'>
          O preço para uma viajem a Alcanena é bastante acessível, a maioria das atrações são gratuitas ou de baixo-custo. É uma
          excelente opção para aqueles que pretendem ir de férias enão gastar muito.
        </p>
        <h1 className='porque-alcanena-h1'>É uma localidade sossegada</h1>
        <p className='porque-alcanena-paragraph'>
          Alcanena não é uma escolha popular da maioria dos turistas, então torna-se uma boa opção para aqueles que querem
          experienciar umas férias descontraídas, sem a correria que existe em outros locais como Lisboa.
        </p>
      </article>
      <CategoryContainer
        sectionTitle='EXPLORE'
        sectionRef={void 0}
        firstItemImage='explorealcanena-natureza.jpg'
        firstItem={{
          name: 'Natureza',
          id: 'Natureza',
          description: (
            <>
              Alcanena tem vários tesouros oferecidos pela natureza
              <br />à espera para serem visitados.
            </>
          ),
          overlayText: 'ver locais de natureza',
        }}
        secondItemImage='explorealcanena-jardins-e-miradouros.jpg'
        secondItem={{
          name: 'Jardins e miradouros',
          id: 'Jardins e miradouros',
          description: (
            <>
              Venha visitar os belos jardins e ver as belas paisagens
              <br />
              dos miradouros de Alcanena.
            </>
          ),
          overlayText: 'ver jardins e miradouros',
        }}
        thirdItemImage='explorealcanena-cultura.jpg'
        thirdItem={{
          name: 'Cultura',
          id: 'Cultura',
          description: <>Descubra mais sobre a cultura da região nestes locais.</>,
          overlayText: 'ver locais de cultura',
        }}
      />
      <CategoryContainer
        sectionTitle='SABOREIE'
        sectionRef={void 0} /* void 0 para não atribuir nenhum Ref ao elemento, uma vez que não é necessário */
        firstItemImage='explorealcanena-restaurantes.jpg'
        firstItem={{
          name: 'Restaurantes',
          description: (
            <>
              Alcanena tem vários tesouros oferecidos pela natureza
              <br />à espera para serem visitados.
            </>
          ),
          overlayText: 'ver restaurantes',
        }}
        secondItemImage='explorealcanena-pastelarias.jpg'
        secondItem={{
          name: 'Pastelarias',
          description: (
            <>
              Venha visitar os belos jardins e ver as belas paisagens
              <br />
              dos miradouros de Alcanena.
            </>
          ),
          overlayText: 'ver pastelarias',
        }}
        thirdItemImage='explorealcanena-cafés.jpg'
        thirdItem={{
          name: 'Cafés',
          description: <>Descubra mais sobre a cultura da região nestes locais.</>,
          overlayText: 'ver cafés',
        }}
      />
    </>
  );
}
export default PorqueAlcanena;
