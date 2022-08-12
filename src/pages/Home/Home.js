import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import MovieList from '../../components/MovieList/MovieList';
import movieApi from '../../common/apis/movieApi';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const movieText = "Chaplin";
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&s=${movieText}&type=movie`
      )
      .catch((err) => {
        console.warn("Erro:", err);
        return;
      })

      dispatch(addMovies(response.data));
    }

    fetchMovies();
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieList />
    </>
  );
};

export default Home;