import { createSlice } from "@reduxjs/toolkit";

export const addTvShowSlice = createSlice ({
    name: 'addTvShow',
    initialState: [],
    reducers: {
        addTvShowToWatch : (state, action) => {
            const tvShowInList = state.find((tvShow) => tvShow === action.payload)
            console.log(tvShowInList)
            if(!tvShowInList){
                return [...state,action.payload]
            }
        },
        clearTvShow: () => []
    }
});

export const { addTvShowToWatch, clearTvShow } = addTvShowSlice.actions;
export const selectAddTvShow = state => state.addTvShowToWatch;
export default addTvShowSlice.reducer;