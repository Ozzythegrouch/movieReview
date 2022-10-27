import React from 'react';
import NavSearch from '../components/search';

const Movies= () => {
  return (
       <div class="y-wrap">
          <h1>Movies</h1>
          <div class = "search-movies">
            <NavSearch />
            <div class = "search-movie-results">
              <button>To Watch</button>
              <button>Watched</button>
            </div>
          </div>
        </div>
  );
};

export default Movies;
