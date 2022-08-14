import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.scss";

const MovieList = () => {
  // const movies = useSelector(getAllMovies);
  const movies = useSelector(getAllSeries);

  const renderMovies = movies ? movies.Response === "True" : null;

  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Filmes</h2>
        <div className="movie-container">
          {renderMovies ? (
            movies.Search.map((movie) => (
              <MovieCard key={movie.imdbID} data={movie} />
            ))
          ) : (
            <div className="movies-error">
              <h3>{movies && movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;