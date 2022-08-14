import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { MagnifyingGlass, Popcorn } from 'phosphor-react';
import { toast } from 'react-toastify'

import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/movieSlice';
import user from "../../images/user.png";
import './Header.scss';

const Header = () => {
  const [busca, setBusca] = useState('');
  const dispatch = useDispatch();

  function handlerSubmit(e) {
    e.preventDefault();

    if (busca.length < 3) {
      return toast.error("Digite uma palavra com pelo menos 3 letras");
    }

    dispatch(fetchAsyncMovies(busca));
    dispatch(fetchAsyncSeries(busca));
    setBusca("");
  }

  return (
    <div className="header">
        <div className="logo">
          <Popcorn size="40px" />
          <Link to="/">
            &nbsp;My-Movies
          </Link>
        </div>

      <div className="search-bar">
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder='Procure Filmes ou Séries'
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button type="submit">
            <MagnifyingGlass size={20} color="#0f171e" weight="bold" />
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;