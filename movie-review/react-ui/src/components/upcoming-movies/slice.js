import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUpcomingMovies = createAsyncThunk('movies/upcoming', async () => {
    const response = await fetch('http://localhost:8080/movieUpcoming/');
    const dataUpcomingMovies = await response.json();
    return dataUpcomingMovies
})

export const upcomingMoviesSlice = createSlice ({
    // creating slice that the store implements
    name: 'upcomingMovies',
    initialState: [],
    reducers: {
        changeUpcomingMovies: (state, action) => [...state, action.payload]
        // action has a key called payload which is the value to update the store
    },
    extraReducers(builder){
        builder.addCase(fetchUpcomingMovies.fulfilled,(state,action) => action.payload)
    }
});

export const { changeUpcomingMovies } = upcomingMoviesSlice.actions; //component update the state, write from the store
export const selectUpcomingMovies = (state) => state.upcomingMovies; // component read from the store
export default upcomingMoviesSlice.reducer; // connects to the store