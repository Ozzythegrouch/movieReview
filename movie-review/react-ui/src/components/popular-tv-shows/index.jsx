import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectPopularTvShows } from "./slice"
import { addTvShowToWatch, clearTvShow } from "./addTvShowSlice"

const PopularTvShows = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        const addTvShowToWatchList = e.target.dataset.tvshow
        console.log(addTvShowToWatchList)
        dispatch(addTvShowToWatch(addTvShowToWatchList))
    }

    const handleClickClear = (e) => {
        const addTvShowToWatchList = e.target.dataset.tvShow
        dispatch(clearTvShow(addTvShowToWatchList))
    }

    const popularTvShows = useSelector(selectPopularTvShows);
    const popularTvShowsImages = "https://image.tmdb.org/t/p/w154";
    const _popularTvShows = popularTvShows && popularTvShows.map((results,index) => { 
        return <li key={index}>
                    <div className="popularTvShowsResultsContainer">
                        <img className="popularTvShowsImages" src= {popularTvShowsImages + results.poster_path} />
                        <div className="popularTvShowsResultsTitleButtons">
                            <div><h3>{ results.name }</h3></div>
                            <div className="popularTvShowsResultsButtons">
                                <button data-tvshow={results.name} onClick={handleClick}>Watch +</button>
                                <button data-tvshow-done={results.name}>Done +</button>
                                <button data-tvshow-clear={results.name} onClick={handleClickClear}>Clear List</button>
                            </div>
                        </div>
                    </div>
                </li>
    })

    return (
        <ul>{_popularTvShows}</ul>
    )
}

export default PopularTvShows