import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectPopularMovies} from "./slice";
import { addMovieToWatch, clearMovieWatch } from "./addMovieSlice";
import addMovieDone from "./addMovieDoneSlice";

const PopularMovies = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        const addMovieToWatchList = e.target.dataset.movie
        dispatch(addMovieToWatch(addMovieToWatchList))
    }

    const handleClickDone = (e) => {
        const addMovieDoneList = e.target.dataset.moviedone
        dispatch(addMovieDone(addMovieDoneList))
    }

    const handleClickClear = (e) => {
        const addMovieToWatchList = e.target.dataset.movie
        dispatch(clearMovieWatch(addMovieToWatchList))
    }

    const popularMovies = useSelector(selectPopularMovies);
    const popularMoviesImages = "https://image.tmdb.org/t/p/w154";
    // useSelector() connects it to the store, responds to changes, components can change the same slice of state
    const _popularMovies = popularMovies.map((results,index) => {
        return <li key={index}>
                    <div className="popularMoviesResultsContainer">
                        <img className="popularMoviesImages" src= {popularMoviesImages + results.poster_path}/>
                        <div className="popularMoviesResultsTitleButtons">
                            <div><h3>{results.title}</h3></div>
                            <div className="popularMoviesResultsButtons">
                                <button data-movie={results.title} onClick={handleClick}>Watch +</button>
                                <button data-moviedone={results.title} onClick={handleClickDone}>Done +</button>
                                <button data-movie={results.title} onClick={handleClickClear}>Clear Watch List</button>
                                <button data-movie={results.title}><ion-icon name="heart-outline"></ion-icon></button>
                            </div> 
                        </div>   
                    </div>
                </li>
    }) 

    return (
        <ul>{_popularMovies}</ul>
    )
}

export default PopularMovies