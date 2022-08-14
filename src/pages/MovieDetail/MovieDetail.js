import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrSeriesDetails, getSelectedMovieOrShow } from '../../redux/movies/movieSlice';
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB avaliações<i className="fa fa-thumbs-up" /> : {data.imdbVotes}
          </span>
          <span>
            Duração <i className="fa fa-film" /> : {data.Runtime}
          </span>
          <span>
            Ano <i className="fa fa-calendar" /> : {data.Year}
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
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;