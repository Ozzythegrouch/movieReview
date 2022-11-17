import { createSlice } from "@reduxjs/toolkit";

export const addMovieDoneSlice = createSlice ({
    name: 'addMovieDone',
    initialState: [],
    reducers: {
        addMovieToDone : (state, action) => [...state, action.payload]
    }
});

export const { addMovieToDone } = addMovieDoneSlice.actions;
export const selectAddMovieDone = state => state.addMovie;
export default addMovieDoneSlice.reducer;