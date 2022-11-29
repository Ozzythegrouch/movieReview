import React from "react";
import { useSelector} from 'react-redux'
import { selectDailyPopular} from "./slice";

const DailyPopularMovies = () => {
    
    const dailyPopularMovies = useSelector(selectDailyPopular);
    const dailyPopularImages = "https://image.tmdb.org/t/p/w154";
    // useSelector() connects it to the store, responds to changes, components can change the same slice of state
    const _dailyPopularMovies = dailyPopularMovies && dailyPopularMovies.map((results,index) => {
        return <li key={index}>
                    <div className="popularMoviesResultsContainer">
                        <img className="popularMoviesImages" src= {dailyPopularImages + results.poster_path} />
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
        <ul>{_dailyPopularMovies}</ul>
    )
}

export default DailyPopularMovies