import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import MovieList from '../../components/MovieList/MovieList';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieList />
    </>
  );
};

export default Home;