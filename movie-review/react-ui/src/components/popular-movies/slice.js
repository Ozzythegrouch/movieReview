import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPopularMovies = createAsyncThunk('movies/popular', async (page) => {
    const response = await fetch(`http://localhost:8080/movie/${page}`);
    const data = await response.json();
    return data;
})

export const popularMoviesSlice = createSlice ({
    // creating slice that the store implements
    name: 'popularMovies',
    initialState: [],
    reducers: {
        changePopularMovies: (state, action) => [...state, action.payload]
        // action has a key called payload which is the value to update the store
    },
    extraReducers(builder){
        builder.addCase(fetchPopularMovies.fulfilled,(state,action) => action.payload)
    }
});

export const { changePopularMovies } = popularMoviesSlice.actions; //component update the state, write from the store
export const selectPopularMovies = (state) => state.popularMovies; // component read from the store
export default popularMoviesSlice.reducer; // connects to the store