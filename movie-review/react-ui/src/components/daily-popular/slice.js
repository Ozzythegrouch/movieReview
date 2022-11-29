import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDailyPopularMovies = createAsyncThunk('movies/dailyPopular', async () => {
    const response = await fetch('http://localhost:8080/movieDailyPopular/');
    const dataDailyPopular = await response.json();
    return dataDailyPopular
})

export const dailyPopularSlice = createSlice ({
    // creating slice that the store implements
    name: 'dailyPopular',
    initialState: [],
    reducers: {
        changeDailyPopular: (state, action) => [...state, action.payload]
        // action has a key called payload which is the value to update the store
    },
    extraReducers(builder){
        builder.addCase(fetchDailyPopularMovies.fulfilled,(state,action) => action.payload)
    }
});

export const { changeDailyPopular } = dailyPopularSlice.actions; //component update the state, write from the store
export const selectDailyPopular = (state) => state.dailyPopular; // component read from the store
export default dailyPopularSlice.reducer; // connects to the store