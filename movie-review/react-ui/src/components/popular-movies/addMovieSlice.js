import { createSlice } from "@reduxjs/toolkit";

export const addMovieSlice = createSlice ({
    name: 'addMovie',
    initialState: [],
    reducers: {
        addMovieToWatch : (state, action) => [...state, action.payload]
    }
});

export const { addMovieToWatch } = addMovieSlice.actions;
export const selectAddMovie = state => state.addMovie;
export default addMovieSlice.reducer;