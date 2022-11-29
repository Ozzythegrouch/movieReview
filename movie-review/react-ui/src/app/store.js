import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from '../components/popular-movies/slice'
import popularTvShowsReducer from '../components/popular-tv-shows/slice'
import addMovieReducer from '../components/popular-movies/addMovieSlice';
import addMovieToDoneReducer from '../components/popular-movies/addMovieDoneSlice';
import addTvShowReducer from '../components/popular-tv-shows/addTvShowSlice'
import upcomingMoviesReducer from '../components/upcoming-movies/slice';
import dailyPopularReducer from '../components/daily-popular/slice';
import topRatedTvShowsReducer from '../components/daily-popular-show/slice';

export default configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        popularTvShows: popularTvShowsReducer,
        addMovieToWatch: addMovieReducer,
        addMovieToDone: addMovieToDoneReducer,
        addTvShowToWatch: addTvShowReducer,
        upcomingMovies: upcomingMoviesReducer,
        dailyPopular: dailyPopularReducer,
        topRatedTvShows : topRatedTvShowsReducer
    }
})