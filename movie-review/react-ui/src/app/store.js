import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from '../components/popular-movies/slice'

export default configureStore({
    reducer: {
        popularMovies: popularMoviesReducer
    }
})