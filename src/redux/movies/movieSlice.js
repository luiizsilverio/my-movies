import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies =
  createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Charlie Chaplin";
    const response = await movieApi.get(
      `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&s=${movieText}&type=movie`
    );
    return response.data;
  });

export const fetchAsyncSeries =
  createAsyncThunk('movies/fetchAsyncSeries', async () => {
    const serieText = "Sandman";
    const response = await movieApi.get(
      `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&s=${serieText}&type=series`
    );
    return response.data;
  });

  export const fetchAsyncMovieOrSeriesDetails =
    createAsyncThunk('movies/fetchAsyncMovieOrSeriesDetails',
      async (id) => {
        const response = await movieApi.get(
          `?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&Plot=full`
        );
        return response.data;
      }
    );

const initialState = {
  movies: {},
  series: {},
  selectedMovieOrShow: {}
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      addMovies: (state, action) => {
        state.movies = action.payload;
      },
      removeSelectedMovieOrShow: (state) => {
        state.selectedMovieOrShow = {};
      }
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: (state) => {
        console.log('fetchAsyncMovies/Pendente');
      },
      [fetchAsyncMovies.fulfilled]: (state, action) => {
        console.log('fetchAsyncMovies/Sucesso');
        state.movies = action.payload;
      },
      [fetchAsyncMovies.rejected]: (state) => {
        console.log('fetchAsyncMovies/Erro');
      },
      [fetchAsyncSeries.fulfilled]: (state, action) => {
        console.log('fetchAsyncSeries/Sucesso');
        state.series = action.payload;
      },
      [fetchAsyncMovieOrSeriesDetails.fulfilled]: (state, action) => {
        console.log('fetchAsyncMovieOrSeriesDetails/Sucesso');
        state.selectedMovieOrShow = action.payload;
      },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer