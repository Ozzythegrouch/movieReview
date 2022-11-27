import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectPopularMovies} from "./slice";
import { addMovieToWatch, clearMovieWatch } from "./addMovieSlice";

const PopularMovies = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        const addMovieToWatchList = e.target.dataset.movie
        dispatch(addMovieToWatch(addMovieToWatchList))
    }

    const handleClickClear = (e) => {
        const addMovieToWatchList = e.target.dataset.movie
        dispatch(clearMovieWatch(addMovieToWatchList))
    }

    const popularMovies = useSelector(selectPopularMovies)
    // useSelector() connects it to the store, responds to changes, components can change the same slice of state
    const _popularMovies = popularMovies.map((results,index) => {
        return <li key={index}>{results.title}
                    <button data-movie={results.title} onClick={handleClick}>Watch +</button>
                    <button data-movie-done={results.title} onClick={handleClick}>Done +</button>
                    <button data-movie={results.title} onClick={handleClickClear}>Clear Watch List</button>
                </li>
    }) 

    return (
        <ul>{_popularMovies}</ul>
    )
}

export default PopularMovies