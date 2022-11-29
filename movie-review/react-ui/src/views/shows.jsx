import React from 'react';
import TopRatedTvShows from '../components/daily-popular-show';
import NavSearch from '../components/search';

const Shows= () => {
  return (
       <div className="y-wrap">
        <h1>Shows</h1>
        <div className="search-shows">
          <NavSearch />
          <div className = "search-shows-results">
            
          </div>
          <h2>Daily Popular Shows</h2>
          <TopRatedTvShows />
        </div>
        </div>
  );
};

export default Shows;
