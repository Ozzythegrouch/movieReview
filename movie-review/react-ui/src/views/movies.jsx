import React from 'react';
import NavSearch from '../components/search';

const Movies= () => {
  return (
       <div className="y-wrap">
          <h1>Movies</h1>
          <div className = "search-movies">
            <NavSearch />
            <div className = "search-movie-results">
              
            </div>
          </div>
        </div>
  );
};

export default Movies;
