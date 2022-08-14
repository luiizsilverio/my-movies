import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import MovieList from '../../components/MovieList/MovieList';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Charlie Chaplin";
  const serieText = "Sandman";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(serieText));
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieList />
    </>
  );
};

export default Home;