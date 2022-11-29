import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopRatedTvShows = createAsyncThunk('shows/topRated', async () => {
    const response = await fetch('http://localhost:8080/tvShowsTopRated') 
    const dataTopRated = await response.json();
    return dataTopRated;
})

export const topRatedTvShowsSlice = createSlice ({
    name: 'topRatedTvShows',
    initialState: [],
    reducers: {
        changeTopRatedTvShows: (state,action) => "Hola"
    },
    extraReducers(builder){
        builder.addCase(fetchTopRatedTvShows.fulfilled,(state,action) => action.payload)
    }
})

export const { changeTopRatedTvShows } = topRatedTvShowsSlice.actions;
export const selectTopRatedTvShows = state => state.topRatedTvShows;
export default topRatedTvShowsSlice.reducer;