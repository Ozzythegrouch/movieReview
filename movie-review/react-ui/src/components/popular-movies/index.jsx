import React from "react";
import { useSelector } from 'react-redux'
import { selectPopularMovies } from "./slice";

const PopularMovies = () => {

    const handleClick = (e) => {
        const addMovieToWatch = e.target.dataset
        console.log(addMovieToWatch)
    }

    const popularMovies = useSelector(selectPopularMovies)
    const _popularMovies = popularMovies.map((movie,index) => {
        return <li key={movie.movieId} >{movie.Title}{movie.Year}
                    <button data-set={movie.Title} onClick={handleClick}>Watch +</button>
                    <button data-set={movie.Title} onClick={handleClick}>Done +</button>
                </li>
    }) 

    return (
        <ul>{_popularMovies}</ul>
    )
}

export default PopularMovies