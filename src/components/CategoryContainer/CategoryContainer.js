import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import './CategoryContainer.css';

function CategoryContainer(props) {
  return (
    <>
      <section className='section-wrapper'>
        <h1 ref={props.sectionRef}>{props.sectionTitle}</h1>
        <div className='section-container'>
          <div className='section-item' id={props.id}>
            <h2>{props.firstItem.name}</h2>
            <div className='section-item-image'>
              <Link to={props.firstItem.name.toLowerCase().replace(/ /g, '-')}>
                {typeof props.firstItemImage !== 'undefined' ? (
                  /* esta verficação impede que um erro ocorra na compilação da aplicação, 
                  porque a função 'require' está a utilizar uma variavel e ao ínicio da compilação
                  a variavel está a receber um valor indefinido. */
                  <img
                    src={
                      /* a função require permite-nos utilizar imagens na pasta src sem ser através de imports,
                       o que nos permitiu utilizar caminhos dinâmicos */
                      require(`../../images/category-images/${props.firstItemImage}`)
                        .default
                    }
                    alt={props.firstItem.name}
                  />
                ) : (
                  void 0 // void 0 retorna indefinido
                )}
                <p>{props.firstItem.overlayText}</p>
              </Link>
            </div>
            <p>{props.firstItem.description}</p>
          </div>

          <div className='section-item'>
            <h2>{props.secondItem.name}</h2>
            <div className='section-item-image'>
              <Link to={props.secondItem.name.toLowerCase().replace(/ /g, '-')}>
                {typeof props.firstItemImage !== 'undefined' ? (
                  <img
                    src={
                      require(`../../images/category-images/${props.secondItemImage}`)
                        .default
                    }
                    alt={props.secondItem.name}
                  />
                ) : (
                  void 0
                )}
                <p>{props.secondItem.overlayText}</p>
              </Link>
            </div>
            <p>{props.secondItem.description}</p>
          </div>

          <div className='section-item'>
            <h2>{props.thirdItem.name}</h2>
            <div className='section-item-image'>
              <Link to={props.thirdItem.name.toLowerCase().replace(/ /g, '-')}>
                {typeof props.firstItemImage !== 'undefined' ? (
                  <img
                    src={
                      require(`../../images/category-images/${props.thirdItemImage}`)
                        .default
                    }
                    alt={props.thirdItem.name}
                  />
                ) : (
                  void 0
                )}
                <p>{props.thirdItem.overlayText}</p>
              </Link>
            </div>
            <p>{props.thirdItem.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryContainer;
