import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from '../components/popular-movies/slice'
import popularTvShowsReducer from '../components/popular-tv-shows/slice'
import addMovieReducer from '../components/popular-movies/addMovieSlice';
import addMovieToDoneReducer from '../components/popular-movies/addMovieDoneSlice';


export default configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        popularTvShows: popularTvShowsReducer,
        addMovieToWatch: addMovieReducer,
        addMovieToDone: addMovieToDoneReducer
    }
})