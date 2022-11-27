import { createSlice } from "@reduxjs/toolkit";

export const addMovieSlice = createSlice ({
    name: 'addMovie',
    initialState: [],
    reducers: {
        addMovieToWatch : (state, action) => { 
            const movieInList = state.find((movie) => movie === action.payload)  
            console.log(movieInList)
            if(!movieInList){
                return [...state,action.payload]
            }
        },
        clearMovieWatch : () => []
    }
});

export const { addMovieToWatch, clearMovieWatch } = addMovieSlice.actions;
export const selectAddMovie = state => state.addMovieToWatch;
export default addMovieSlice.reducer;