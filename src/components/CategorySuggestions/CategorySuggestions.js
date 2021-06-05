import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
//CSS
import './CategorySuggestions.css';

//Conteúdo das sugestões de categoria
class Categoria {
  constructor(route, title, image, overlayText, description) {
    this.route = route;
    this.title = title;
    this.image = image;
    this.overlayText = overlayText;
    this.description = description;
  }
}

const Natureza = new Categoria(
  '/natureza',
  'Natureza',
  'explorealcanena-natureza.jpg',
  'ver natureza',
  'Alcanena tem vários tesouros oferecidos pela natureza à espera para serem visitados.'
);
const JardinsMiradouros = new Categoria(
  '/jardins-e-miradouros',
  'Jardins e Miradouros',
  'explorealcanena-jardins-e-miradouros.jpg',
  'ver jardins e miradouros',
  'Venha visitar os belos jardins e ver as belas paisagens dos miradouros de Alcanena.'
);
const Cultura = new Categoria(
  '/cultura',
  'Cultura',
  'explorealcanena-cultura.jpg',
  'ver locais de cultura',
  'Descubra mais sobre a cultura da região nestes locais.'
);
const Restaurantes = new Categoria(
  '/restaurantes',
  'Restaurantes',
  'explorealcanena-restaurantes.jpg',
  'ver restaurantes',
  'Procura um local para almoçar ou jantar? Veja aqui os restaurantes de Alcanena!'
);
const Pastelarias = new Categoria(
  '/pastelarias',
  'Pastelarias',
  'explorealcanena-pastelarias.jpg',
  'ver pastelarias',
  'Alcanena tem várias pastelarias que fazem fantásticos bolos, não se esqueça de passar por uma!'
);
const Cafés = new Categoria(
  '/cafés',
  'Cafés',
  'explorealcanena-cafés.jpg',
  'ver cafés',
  'Se precisar de tomar um café, de comer um petisco ou até beber uma imperial, Alcanena tem vários cafés à sua disposição.'
);

//Componente
function CategorySuggestions({ currentCategory }) {
  // Este switch irá associar o objeto de categoria à categoria que foi passada ao componente
  const categoryContent = {
    natureza: Natureza,
    'jardins-e-miradouros': JardinsMiradouros,
    cultura: Cultura,
    restaurantes: Restaurantes,
    pastelarias: Pastelarias,
    cafés: Cafés,
  };

  currentCategory = categoryContent[currentCategory];

  let categoriesToDisplay = findCategoriesToDisplay(currentCategory);

  return (
    <div className='category-suggestions-container'>
      <h2 className='category-suggestions-container-title'>Veja também</h2>
      <div className='category-suggestions-items'>
        {categoriesToDisplay.map((cat) => (
          <CategorySuggestionItem
            key={cat.title}
            title={cat.title}
            image={cat.image}
            route={cat.route}
            overlayText={cat.overlayText}
            description={cat.description}
          />
        ))}
      </div>
    </div>
  );
}

//Esta função irá determinar que categorias irão ser expostas dependendo da categoria atual
const findCategoriesToDisplay = (currentCategory) => {
  if (currentCategory === Natureza || currentCategory === JardinsMiradouros || currentCategory === Cultura) {
    return categorieSelfFilter([Natureza, JardinsMiradouros, Cultura], currentCategory);
  } else {
    return categorieSelfFilter([Restaurantes, Pastelarias, Cafés], currentCategory);
  }
};

// Esta função irá excluir o nome da categoria atual da array de listas
const categorieSelfFilter = (categoriesToDisplay, currentCategory) => {
  return categoriesToDisplay.filter((cat) => cat !== currentCategory); // cat = categoria/categorie
};

//Sub-Componente
function CategorySuggestionItem({ title, image, route, overlayText, description }) {
  return (
    <>
      <div className='category-suggestions-item'>
        <div className='category-suggestions-image-container'>
          <Link
            to={route}
            onClick={() => {
              window.location.href = route; // Forçar recarregamento da página
            }}
          >
            <img
              src={require(`../../images/category-images/${image}`).default}
              alt={title}
              className='category-suggestions-image'
            />
            <p className='category-suggestions-overlay-text'>{overlayText}</p>
          </Link>
        </div>
        <Link
          to={route}
          onClick={() => {
            window.location.href = route;
          }}
        >
          <h2>{title}</h2>
        </Link>
        <p className='category-suggestions-description'>{description}</p>
      </div>
    </>
  );
}

export default CategorySuggestions;
