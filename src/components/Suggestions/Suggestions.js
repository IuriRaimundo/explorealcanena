import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './Suggestions.css';
//Utils
import { storageOperations } from '../../utils/utils';

function Suggestions({ data, selectedPlace }) {
  const [placesToDisplay, setPlacesToDisplay] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // Este useEffect vai obter os locais para mostrar
  useEffect(() => {
    let placesToDisplayArray = [];

    // Esta função vai obter números aleatoriamente entre 0 e 6, ou 0 e o número de locais dacategoria caso seja menor que 6
    const getRandomIntegers = () => {
      let nums = [];
      // Este loop vai executar até que o comprimento da array nums seja igual ao da lista de locais
      // recebidos ou seja menor que 6, para não fazer operações desnecessárias
      while (nums.length !== data.length && nums.length !== 6) {
        // Obter número inteiro compreendido entre 0 e o número de locais recebidos no componente
        let n = Math.floor(Math.random() * data.length);
        // Só incluir o número na array nums se ele for único
        if (!nums.includes(n)) {
          nums.push(n);
        }
      }
      return nums;
    };
    // Conseguir os locais utilizando os números aleatórios
    let randomIntegers = getRandomIntegers();
    randomIntegers.map((n) => {
      return placesToDisplayArray.push(data[n]);
    });
    // Remover o local atual da array de locais obtida
    placesToDisplayArray = placesToDisplayArray.filter((p) => p !== selectedPlace);
    // Atualizar o state com os locais obtidos
    setPlacesToDisplay(placesToDisplayArray);
  }, [data, selectedPlace]);

  useEffect(() => {
    const idArray = [];
    placesToDisplay.forEach((place) => {
      idArray.push(place.id);
    });
    storageOperations.getDifferentFolderImagesURL('places', 'imagem-pequena', idArray).then((urls) => {
      setImageUrls(urls);
    });
  }, [placesToDisplay]);

  let pressed = false; // Estado do slider
  let startx; // Localização do clique no slider
  let x; // Localização do rato quando o utilizador arrasta o rato

  // Esta função vai verificar se o utilizador tentou deslizar para além do fim ou do início do slider, e bloquear
  const checkboundary = (slider, innerSlider) => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = '0px'; // Limitar início
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`; // Limitar fim
    }
  };

  // Este useEffect vai tratar da funcionalidade de deslizamento
  useEffect(() => {
    const slider = document.querySelector('.suggestions-images-wrapper');
    const innerSlider = document.querySelector('.suggestions-images-inner'); // Contentor das imagens
    const suggestionImg = document.querySelector('.place-suggestion-item'); // Imagem

    if (innerSlider && suggestionImg) {
      // Ajustar tamanho do contentor das imagens para o tamanho da imagem multiplicado pelo número de locais
      innerSlider.style.width = `${suggestionImg.getBoundingClientRect().width * placesToDisplay.length}px`;
    }

    // Só executar quando slider e innerSlider forem renderizados
    // e se o contentor das imagens for menor do que o seu parente,
    // para desativar a funcionalidade do carrossel se houver espaço
    // para todas as imagens.
    if (slider && innerSlider && slider.getBoundingClientRect().width < innerSlider.getBoundingClientRect().width) {
      // Eventos para rato

      slider.addEventListener('mousedown', (e) => {
        pressed = true; // Ativar slider
        startx = e.offsetX - innerSlider.offsetLeft; // Registar a localização do clique do utilizador
        slider.style.cursor = 'grabbing';
      });

      slider.addEventListener('mouseenter', () => {
        slider.style.cursor = 'grab';
      });

      slider.addEventListener('mouseup', () => {
        slider.style.cursor = 'grab';
      });
      // É aplicado no window para conseguir registar o evento fora do slider
      window.addEventListener('mouseup', () => {
        pressed = false; // Desativar slider
      });

      slider.addEventListener('mousemove', (e) => {
        if (!pressed) return; // Não executar o resto da função caso o slider não esteja ativo (pressed = true)
        e.preventDefault();
        x = e.offsetX; // Registar localização do rato enquanto é arrastado
        // Mudar localização do contentor das imagens, este cálculo vai conseguir o número de pixeis para deslocar
        // SÓ FUNCIONA COM ELEMENTOS COM POSITION ABSOLUTE OU RELATIVE PORQUE É ALTERADO A PROPRIEDADE LEFT
        innerSlider.style.left = `${x - startx}px`;
        // Verificar se o slider continua entre os limites
        checkboundary(slider, innerSlider);
      });

      // Eventos para touchscreens, mesma lógica porém com adaptações para o objeto de eventos touch
      // passive: true é para melhorar a performance ao desativar o bloqueio dos event listeners durante o scroll.
      slider.addEventListener(
        'touchstart',
        (e) => {
          pressed = true;
          startx = e.targetTouches[0].clientX - innerSlider.offsetLeft;
        },
        { passive: true }
      );

      slider.addEventListener(
        'touchmove',
        (e) => {
          if (!pressed) return;
          x = e.targetTouches[0].clientX;
          innerSlider.style.left = `${x - startx}px`;
          checkboundary(slider, innerSlider);
        },
        { passive: true }
      );
    }

    // Remover event listener para evitar serem adicionados vários event listeners entre renderizações
    return () => {
      if (slider) {
        slider.removeEventListener('mousedown', (e) => {
          pressed = true;
          startx = e.offsetX - innerSlider.offsetLeft;
          slider.style.cursor = 'grabbing';
        });

        slider.removeEventListener('mouseenter', () => {
          slider.style.cursor = 'grab';
        });

        slider.removeEventListener('mouseup', () => {
          slider.style.cursor = 'grab';
        });

        window.removeEventListener('mouseup', () => {
          pressed = false;
        });

        slider.removeEventListener('mousemove', (e) => {
          if (!pressed) return;
          e.preventDefault();
          x = e.offsetX;
          innerSlider.style.left = `${x - startx}px`;
          checkboundary(slider, innerSlider);
        });

        slider.removeEventListener(
          'touchstart',
          (e) => {
            pressed = true;
            startx = e.targetTouches[0].clientX - innerSlider.offsetLeft;
          },
          { passive: true }
        );

        slider.removeEventListener(
          'touchmove',
          (e) => {
            if (!pressed) return;
            console.log(e.targetTouches[0].clientX);
            x = e.targetTouches[0].clientX;
            innerSlider.style.left = `${x - startx}px`;
            checkboundary(slider, innerSlider);
          },
          { passive: true }
        );
      }
    };
  });

  return placesToDisplay.length > 0 ? (
    <>
      <section className='place-suggestions'>
        <h1 className='suggestions-title'>Veja também</h1>
        <div className='suggestions-images-wrapper'>
          <div className='suggestions-images-inner'>
            {placesToDisplay.map((place, index) => {
              return <SuggestionItem place={place} url={imageUrls[index]} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  ) : null;
}

const SuggestionItem = ({ place, url }) => {
  return (
    <div className='place-suggestion-item'>
      <img src={url} alt={`imagem de ${place.nome}`} draggable='false' />
      <Link to={place.id}>
        <h4>{place.nome}</h4>
      </Link>
    </div>
  );
};

export default Suggestions;
