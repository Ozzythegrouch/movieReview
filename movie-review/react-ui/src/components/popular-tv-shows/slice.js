import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPopularTvShows = createAsyncThunk('shows/popular', async () => {
    const response = await fetch('http://localhost:8080/tvShowsPopular') 
    const dataPopTvShows = await response.json();
    return dataPopTvShows;
})

export const popularTvShowsSlice = createSlice ({
    name: 'popularTvShows',
    initialState: [],
    reducers: {
        changePopularTvShows: (state,action) => "Hola"
    },
    extraReducers(builder){
        builder.addCase(fetchPopularTvShows.fulfilled,(state,action) => action.payload)
    }
})

export const { changePopularTvShows } = popularTvShowsSlice.actions;
export const selectPopularTvShows = state => state.popularTvShows;
export default popularTvShowsSlice.reducer;