import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { SliderSettings } from '../../common/sliderSettings';
import "./MovieList.scss";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const renderMovies = movies ? movies.Response === "True" : null;
  const renderShows = series ? series.Response === "True" : null;

  function renderCarrossel(lista) {
    return (
      <Slider {...SliderSettings}>
        {
          lista.Search.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))
        }
      </Slider>
    )
  }

  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Filmes</h2>
        <div className="movie-container">
          {renderMovies ? (
            renderCarrossel(movies)
          ) : (
            <div className="movies-error">
              <h3>{movies && movies.Error}</h3>
            </div>
          )}
        </div>
      </div>

      <div className="show-list">
        <h2>Séries</h2>
        <div className="movie-container">
          {renderShows ? (
            renderCarrossel(series)
          ) : (
            <div className="movies-error">
              <h3>{series && series.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;