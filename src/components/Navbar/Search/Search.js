import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './Search.css';
//Icones
import searchIcon from '../../../images/icons/search.svg';
//Utils
import { searchOperations } from '../../../utils/utils';

function Search({ menuState }) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setSearch(inputRef.current.value);
    inputRef.current.value.length >= 5 ? setShowSearch(true) : setShowSearch(false); //quando forem inseridos 5 ou mais caraters iniciar a pesquisa
  };

  if (!menuState || window.innerWidth > 1200) {
    return (
      <section role='search' id='search-section hide-mobile'>
        <div className='search hide-mobile'>
          <img src={searchIcon} alt='lupa' />
          <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Procure um local' id='search' value={search} ref={inputRef} onChange={handleChange} />
          </form>
        </div>
        {showSearch ? <SearchResult search={search} /> : null}
      </section>
    );
  } else {
    return null;
  }
}

function SearchResult({ search }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    setSearchResult('');
    setIsLoading(true);
    setError(false);
    if (search) {
      searchOperations
        .search(search)
        .then((result) => {
          setSearchResult(result);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setError(true);
        });
    }
  }, [search]);

  if (isLoading) {
    // se IsLoading é verdadeiro, mostrar que ainda está a carregar
    return (
      <div className='search-results-wrapper'>
        <div className='search-loading'>
          <p>a procurar</p>
          <div className='search-loading-spinner'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  } else if (error) {
    // se IsLoading é falso, verifica a existencia de erros no fetch e se existirem erros renderizar o erro.
    return (
      <div className='search-results-wrapper'>
        <div className='search-error'>
          <p>Não encontramos nenhum local com esse nome</p>
        </div>
      </div>
    );
  } else if (searchResult) {
    // se IsLoading é falso e não existem erros, apresentar o local
    return (
      <div className='search-results-wrapper'>
        <div className='search-result'>
          <p>{searchResult.nome}</p>
          <Link
            to={`/${searchResult.categorias[0]}/${searchResult.id}`}
            onClick={() => {
              window.location.href = `/${searchResult.categorias[0]}/${searchResult.id}`;
            }}
          >
            <img src={searchResult.imagemPesquisa} alt={`imagem de ${searchResult.nome}`} id='search-result-image' />
            <p className='search-result-hover'>ver local</p>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Search;
