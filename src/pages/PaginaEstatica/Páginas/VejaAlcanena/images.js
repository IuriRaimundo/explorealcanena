//Importar imagens para a galeria de imagens aqui

//Caminho para a galeria de imagem: src/images/image-gallery/
import image1Import from '../../../../images/image-gallery/rio-alviela.jpg';
import image2Import from '../../../../images/image-gallery/janela-carsica-do-alviela.jpg';
import image3Import from '../../../../images/image-gallery/algar-de-abatimento-alviela.jpg';
import image4Import from '../../../../images/image-gallery/miradouro_depositos_noite.jpg';
import image5Import from '../../../../images/image-gallery/miradouro_jrv.jpg';
import image6Import from '../../../../images/image-gallery/miradouro_jrv2.jpg';
import image7Import from '../../../../images/image-gallery/praia_fluvial_olhos_de_agua.jpg';
import image8Import from '../../../../images/image-gallery/ponte_da_pedra.jpg';
import image9Import from '../../../../images/image-gallery/ponte_da_pedra2.jpg';
import image10Import from '../../../../images/image-gallery/hotel_eurosol.jpg';
import image11Import from '../../../../images/image-gallery/miradouro_depositos_noite2.jpg';
import image12Import from '../../../../images/image-gallery/miradouro_depositos.jpg';

// Objeto de imagem
class Image {
  constructor(image, alt, text, route) {
    this.image = image;
    this.alt = alt;
    this.text = text;
    this.route = route;
  }
}
// Imagens
const image1 = new Image(
  image1Import,
  'Imagem do rio Alviela',
  `Praia Fluvial Olhos D'Água`,
  '/património-natural/praia-fluvial-dos-olhos-de-água'
);
const image2 = new Image(
  image2Import,
  'Janela cársica do Alviela',
  `Trilho dos Olhos D'Água`,
  '/património-natural/trilho-alviela'
);
const image3 = new Image(
  image3Import,
  'Algar de abatimento do Alviela',
  `Trilho dos Olhos D'Água`,
  '/património-natural/trilho-alviela'
);
const image4 = new Image(
  image4Import,
  'Miradouro dos Depósitos após o pôr do sol',
  'Miradouro do Depóstios',
  '/jardins-e-miradouros/miradouro-dos-depósitos'
);
const image5 = new Image(
  image5Import,
  'Miradouro Joaquim Ramos Vieira durante o pôr do sol',
  'Miradouro Joaquim Ramos Vieira',
  '/jardins-e-miradouros/miradouro-joaquim-ramos-vieira'
);
const image6 = new Image(
  image6Import,
  'Miradouro Joaquim Ramos Vieira durante o pôr do sol',
  'Miradouro Joaquim Ramos Vieira',
  '/jardins-e-miradouros/miradouro-joaquim-ramos-vieira'
);
const image7 = new Image(
  image7Import,
  'Praia fluvial dos Olhos De Água, vista da ponte.',
  'Praia Fluvial dos Olhos De Água',
  '/património-natural/praia-fluvial-dos-olhos-de-água'
);
const image8 = new Image(image8Import, 'Ponte da pedra', 'Ponte da Pedra', '/património-natural/ponte-da-pedra');
const image9 = new Image(image9Import, 'Ponte da pedra', 'Ponte da Pedra', '/património-natural/ponte-da-pedra');
const image10 = new Image(image10Import, 'Hotel Eurosol Alcanena', 'Hotel Eurosol Alcanena', '/alojamento/hotel-eurosol');
const image11 = new Image(
  image11Import,
  'Miradouro dos depósitos pôr do sol',
  'Miradouro dos Depósitos',
  '/jardins-e-miradouros/miradouro-dos-depósitos'
);
const image12 = new Image(
  image12Import,
  'Miradouro dos depósitos',
  'Miradouro dos Depósitos',
  '/jardins-e-miradouros/miradouro-dos-depósitos'
);

const images = [image1, image7, image3, image2, image5, image6, image4, image11, image12, image10, image8, image9];

export default images;
