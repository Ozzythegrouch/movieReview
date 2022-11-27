import React, {useState, useEffect} from 'react';
import PopularMovies from '../components/popular-movies';
import PopularTvShows from '../components/popular-tv-shows';

const Landing= () => {
  const [nextMovies, setNextMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [isShowMovies, setIsShowMovies] = useState(true)

  const handleChange = () => {
    setIsShowMovies(!isShowMovies)
  } 

  const handleClickMovie = () => {

  }

  return (
       <div className="y-wrap">
          <div className = "movie-show-slider">
            <div className="top-movie-slider">
              <h3>Top Movies</h3>
            </div>
            <label className="switch">
              <input onChange={handleChange} checked = {isShowMovies} type="checkbox" />
              <span className="slider"></span>
            </label>
            <div className="top-shows-slider">
              <h3>Top Shows</h3>
            </div>
          </div>
          <div className="movie-show-container">
            {isShowMovies && (
               <div data-type = "top-movies" className="top-movies-container">
               <h1>Top Movies of all Time</h1>
               <div className="top-movies">
                <PopularMovies />
               </div>
             </div>
            )}
            {!isShowMovies && (
               <div data-type = "top-shows" className="top-shows-container">
               <h1>Top Shows of all Time</h1>
               <div className = "top-shows">
                 <PopularTvShows />
               </div>
             </div>
            )}
            <div className='movieShowButtonPages'>
                  <button className='movieShowPrevious'>Previous</button>
                  <button className='movieShownext'>Next</button>
            </div>
          </div>
      </div>    
  );
};

export default Landing;
