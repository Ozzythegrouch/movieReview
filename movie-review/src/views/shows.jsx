import React from 'react';
import NavSearch from '../components/search';

const Shows= () => {
  return (
       <div class="y-wrap">
        <h1>Shows</h1>
        <div class="search-shows">
          <NavSearch />
          <div class = "search-shows-results">
            <button>To Watch</button>
            <button>Watched</button>
          </div>
        </div>
        </div>
  );
};

export default Shows;
