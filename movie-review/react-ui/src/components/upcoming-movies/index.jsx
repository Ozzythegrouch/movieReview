import React from "react";
import { useSelector} from 'react-redux'
import { selectUpcomingMovies} from "./slice";

const UpcomingMovies = () => {
    
    const upcomingMovies = useSelector(selectUpcomingMovies);
    const upcomingMoviesImages = "https://image.tmdb.org/t/p/w154";
    // useSelector() connects it to the store, responds to changes, components can change the same slice of state
    const _upcomingMovies = upcomingMovies && upcomingMovies.map((results,index) => {
        return <li key={index}>
                    <div className="popularMoviesResultsContainer">
                        <img className="popularMoviesImages" src= {upcomingMoviesImages + results.poster_path} />
                        <div className="popularMoviesResultsTitleButtons">
                            <div><h3>{results.title}</h3></div>
                            <div className="popularMoviesResultsButtons">
                                <button data-movie={results.title}>Watch +</button>
                                <button data-moviedone={results.title}>Done +</button>
                                <button data-movie={results.title}>Clear Watch List</button>
                            </div> 
                        </div>   
                    </div>
                </li>
    }) 
    return (
        <ul>{_upcomingMovies}</ul>
    )
}

export default UpcomingMovies