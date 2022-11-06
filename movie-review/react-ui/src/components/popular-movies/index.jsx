import React from "react";
import { useSelector } from 'react-redux'
import { selectPopularMovies } from "./slice";

const PopularMovies = () => {
    const popularMovies = useSelector(selectPopularMovies)

    return (

        <div>I am popular Movies  {popularMovies}</div>
    )
}

export default PopularMovies