import React from 'react';
//Styles
import './PaginaInicial.css';
//Componentes
import HeaderMainPage from '../../components/HeaderMainPage/HeaderMainPage';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Footer from '../../components/Footer/Footer';

function PaginaInicial() {
  const firstSectionRef = React.useRef(null);
  const secondSectionRef = React.useRef(null);
  const thirdSectionRef = React.useRef(null);

  return (
    <>
      <HeaderMainPage firstSectionRef={firstSectionRef} secondSectionRef={secondSectionRef} thirdSectionRef={thirdSectionRef} />
      <section className='introduction'>
        <p>
          Bem-vindo ao Explore Alcanena, aqui irás encontrar tudo o que precisas de saber sobre Alcanena.
          <br />
          A nossa missão é ajudar-lhe a decidir se irás visitar Alcanena, e se sim, ajudar-te a aproveitar a sua viajem ao máximo.
          <br />
          Onde dormir? Onde comer? O que visitar? Nós iremos responder a todas essas perguntas e servir como referência durante a
          sua
          <br /> viagem a Alcanena!
        </p>
      </section>
      <CategoryContainer
        sectionTitle='EXPLORE'
        sectionRef={firstSectionRef}
        firstItemImage='explorealcanena-natureza.jpg'
        firstItem={{
          name: 'Natureza',
          id: 'Natureza',
          description: 'Alcanena tem vários tesouros oferecidos pela natureza à espera para serem visitados.',
          overlayText: 'ver locais de natureza',
        }}
        secondItemImage='explorealcanena-jardins-e-miradouros.jpg'
        secondItem={{
          name: 'Jardins e miradouros',
          id: 'Jardins e miradouros',
          description: 'Venha visitar os belos jardins e ver as belas paisagens dos miradouros de Alcanena.',
          overlayText: 'ver jardins e miradouros',
        }}
        thirdItemImage='explorealcanena-cultura.jpg'
        thirdItem={{
          name: 'Cultura',
          id: 'Cultura',
          description: 'Descubra mais sobre a cultura da região nestes locais.',
          overlayText: 'ver locais de cultura',
        }}
      />

      <CategoryContainer
        sectionTitle='SABOREIE'
        sectionRef={secondSectionRef}
        firstItemImage='explorealcanena-restaurantes.jpg'
        firstItem={{
          name: 'Restaurantes',
          description: (
            <>
              Procura um local para almoçar ou jantar?
              <br />
              Veja aqui os restaurantes de Alcanena!
            </>
          ),
          overlayText: 'ver restaurantes',
        }}
        secondItemImage='explorealcanena-pastelarias.jpg'
        secondItem={{
          name: 'Pastelarias',
          description: 'Alcanena tem várias pastelarias que fazem fantásticos bolos, não se esqueça de passar por uma!',
          overlayText: 'ver pastelarias',
        }}
        thirdItemImage='explorealcanena-cafés.jpg'
        thirdItem={{
          name: 'Cafés',
          description:
            'Se precisar de tomar um café, de comer um petisco ou até beber uma imperial, Alcanena tem vários cafés à sua disposição.',
          overlayText: 'ver cafés',
        }}
      />
      <ImageGallery sectionRef={thirdSectionRef} sectionTitle='ADMIRE' />
      <Footer />
    </>
  );
}

export default PaginaInicial;
