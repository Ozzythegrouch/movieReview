import React from 'react';
import { useSelector } from 'react-redux';
import { selectAddMovie } from '../../components/popular-movies/addMovieSlice';

const ProfileLanding= () => {
  const addMovies = useSelector(selectAddMovie)
  const _addMovies = addMovies.map((addMovie, index) => {
    return (<li key={index}>{addMovie}</li>)
  })
  return (
    <div className="y-wrap">
       <div>
            <div className="userFavoriteMoviesContainer">
              <h2>Favorite Movies</h2>
              <div className="userFavoriteMovies">

              </div>
            </div>
            </div>
            <div className="userFavoriteShowsContainer">
              <h2>Favorite Shows</h2>
              <div className="userFavoriteShows">

              </div>
            </div>
            <div className="userProfileStatsContainer">
              <h2>Accolades</h2>
              <div className="userProfileStatsContainerScores">
                <div className="userProfileStatsTotalMoviesWatched">
                  
                </div>
                <h5>Total Movies Watched</h5>
                <div className="userProfileStatsTotalShowsWatched">

                </div>
                <h5>Total Shows Watched</h5>
                <div className="userProfileStatsTotalEpisodesWatched">

                </div>
                <h5>Total Episodes Watched</h5>
              </div>  
            </div>
            <div className="watch-list">
              <div className="to-watch">
                <fieldset>
                  <legend><h3>To Watch</h3></legend>
                    <ul>{_addMovies}</ul>
                </fieldset>
              </div>
              <div className="just-watched">
                <fieldset>
                  <legend><h3>Just Watched</h3></legend>
                  
                </fieldset>                
              </div>
            </div>   
        </div>            
  );
};

export default ProfileLanding;