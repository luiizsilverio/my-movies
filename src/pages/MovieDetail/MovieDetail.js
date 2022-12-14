import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Star, ThumbsUp, FilmStrip, CalendarBlank, Popcorn } from "phosphor-react";

import {
  fetchAsyncMovieOrSeriesDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow
} from '../../redux/movies/movieSlice';

import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetails(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID]);

  if (Object.keys(data).length === 0) {
    return (
      <div className='movie-section'>
        <div>Aguarde...</div>
      </div>
    )
  }

  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">{ data.Title }</div>
        <div className="movie-rating">
          <span>
            IMDB {' '}
            <Star size={16} color="#ff9e00" weight="fill" /> : {data.imdbRating}
          </span>
          <span>
            Avaliações {' '}
            <ThumbsUp size={16} color="#fafafa" weight="fill" /> : {data.imdbVotes}
          </span>
          <span>
            Duração {' '}
            <FilmStrip size={16} color="#c4c4cF" weight="fill" /> : {data.Runtime}
          </span>
          <span>
            Ano {' '}
            <CalendarBlank size={16} color="peachpuff" weight="fill" /> : {data.Year}
          </span>
        </div>

        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Diretor</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Elenco</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Gênero</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Idioma</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Prêmios</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>

      <div className="section-right">
        {
          data.Poster === "N/A" ? (
            <Popcorn alt={data.Title} size="50%" />
          ) : (
            <img src={data.Poster} alt={data.Title} />
          )
        }
      </div>
    </div>
  );
};

export default MovieDetail;