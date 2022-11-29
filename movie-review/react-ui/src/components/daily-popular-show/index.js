import React from "react"
import {useSelector} from 'react-redux'
import { selectTopRatedTvShows } from "./slice"

const TopRatedTvShows = () => {

    const topRatedTvShows = useSelector(selectTopRatedTvShows);
    const topRatedTvShowsImages = "https://image.tmdb.org/t/p/w154";
    const _topRatedTvShows = topRatedTvShows && topRatedTvShows.map((results,index) => { 
        return <li key={index}>
                    <div className="popularTvShowsResultsContainer">
                        <img className="popularTvShowsImages" src= {topRatedTvShowsImages + results.poster_path} />
                        <div className="popularTvShowsResultsTitleButtons">
                            <div><h3>{ results.name }</h3></div>
                            <div className="popularTvShowsResultsButtons">
                                <button data-tvshow={results.name}>Watch +</button>
                                <button data-tvshow-done={results.name}>Done +</button>
                                <button data-tvshow-clear={results.name}>Clear List</button>
                            </div>
                        </div>
                    </div>
                </li>
    })

    return (
        <ul>{_topRatedTvShows}</ul>
    )
}

export default TopRatedTvShows