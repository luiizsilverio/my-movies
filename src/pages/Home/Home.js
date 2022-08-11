import React from 'react';
import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import movieApi from '../../common/apis/movieApi';

const Home = () => {

  useEffect(() => {
    const movieText = "Duna";

    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&s=${movieText}&type=movie`
      )
      .catch((err) => {
        console.warn("Erro:", err)
      })
      console.log(response.data);
    }

    fetchMovies();
  }, [])

  return (
    <>
      <div className='banner-img'></div>
      <MovieList />
    </>
  );
};

export default Home;