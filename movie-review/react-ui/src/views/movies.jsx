import React from 'react';
import DailyPopularMovies from '../components/daily-popular';
import NavSearch from '../components/search';
import UpcomingMovies from '../components/upcoming-movies';

const Movies= () => {
  return (
       <div className="y-wrap">
          <h1>All the Movies</h1>
          <div className = "search-movies">
            <NavSearch />
            <div className = "search-movie-results" >
              
            </div>
            <div className="moviesPageContainer">
              <div className="upcomingMoviesContainer">
                <h2>Upcoming Movies</h2>
                <div><UpcomingMovies /></div>
              </div>  
              <div className="dailyPopularMoviesContainer">
                <h2>Daily Popular Movies</h2>
                <DailyPopularMovies />
              </div>
            </div>
          </div>
        </div>
  );
};

export default Movies;
