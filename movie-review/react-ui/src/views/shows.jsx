import React from 'react';
import NavSearch from '../components/search';

const Shows= () => {
  return (
       <div className="y-wrap">
        <h1>Shows</h1>
        <div className="search-shows">
          <NavSearch />
          <div className = "search-shows-results">
            
          </div>
        </div>
        </div>
  );
};

export default Shows;
