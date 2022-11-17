import React from 'react';
import NavSearch from '../components/search';

const Shows= () => {
  return (
       <div className="y-wrap">
        <h1>Shows</h1>
        <div className="search-shows">
          <NavSearch />
          <div className = "search-shows-results">
            <button>To Watch</button>
            <button>Watched</button>
          </div>
        </div>
        </div>
  );
};

export default Shows;
