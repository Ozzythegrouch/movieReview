import { createSlice } from "@reduxjs/toolkit";

export const popularMoviesSlice = createSlice ({
    // creating slice that the store implements
    name: 'popularMovies',
    initialState: 'Hello World',
    reducers: {
        changeGreeting: (state, action) => "Hola Mundo"
    }
});


export const { changeGreeting } = popularMoviesSlice.actions; //component update the state, write from the store
export const selectPopularMovies = (state) => state.popularMovies; // component read from the store
export default popularMoviesSlice.reducer; // connects to the store