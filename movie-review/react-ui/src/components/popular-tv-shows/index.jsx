import React from "react"
import { useSelector } from 'react-redux'
import { selectPopularTvShows } from "./slice"

const PopularTvShows = () => {
    const popularTvShows = useSelector(selectPopularTvShows)
    const _popularTvShows = popularTvShows && popularTvShows.map((results,index) => { 
        return <li key={results.id}>{ results.name }
                    <button>Watch +</button>
                    <button>Done +</button>
                </li>
    })

    return (
        <ul>{_popularTvShows}</ul>
    )
}

export default PopularTvShows