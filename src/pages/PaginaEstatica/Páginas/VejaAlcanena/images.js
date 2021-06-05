//Importar imagens para a galeria de imagens aqui

//Caminho para a galeria de imagem: src/images/image-gallery/
import image1Import from '../../../../images/image-gallery/rio-alviela.jpg';
import image2Import from '../../../../images/image-gallery/janela-carsica-do-alviela.jpg';
import image3Import from '../../../../images/image-gallery/algar-de-abatimento-alviela.jpg';

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
const image1 = new Image(image1Import, 'Imagem do rio Alviela', `Praia Fluvial Olhos D'Água`, '/natureza');
const image2 = new Image(image2Import, 'Janela cársica do Alviela', `Trilho dos Olhos D'Água`, '/natureza');
const image3 = new Image(image3Import, 'Algar de abatimento do Alviela', `Trilho dos Olhos D'Água`, '/natureza');
// Testes
const image4 = image1;
const image5 = image2;
const image6 = image3;
const image7 = image1;
const image8 = image2;
const image9 = image3;
const image10 = image1;
const image11 = image2;
const image12 = image3;

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

export default images;
