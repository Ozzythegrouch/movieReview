import React from 'react';
import Oscar from '../assets/oscar.jpg'
import { NavLink } from 'react-router-dom';
import MainProfile from '../sectioning/mainProfile';

const Profile= () => {

  return (
       <div className="y-wrap">
          <div className="user-profile-container">
            <div className="userProfileContainerInfo">
              <div className="user-profile">
                <img src={Oscar} alt={Oscar} className="oscarPic" />
                <div className="userProfileName">
                    <h2>Ozzy</h2>
                    <button className="userProfileFollow">Follow+</button>
                </div>  
              </div>
              <div className='userProfileActivityContainer'>
                <div className="userProfileActivityContainerTop">
                  <NavLink to="./profile/landing" className="textLink"><button className="userButtonProfile"><ion-icon name="person-outline"></ion-icon>Profile</button></NavLink>
                  <NavLink to="./profile/movies" className="textLink"><button className="userButtonWatchMovies"><ion-icon name="videocam-outline"></ion-icon>Movies</button></NavLink>
                  <NavLink to="./profile/shows" className="textLink"><button className="userButtonWatchShows"><ion-icon name="tv-outline"></ion-icon>Shows</button></NavLink>
                </div>
                <div className="userProfileActivityContainerMiddle">
                  <NavLink to="./profile/diary" className="textLink"><button className="userButtonWatchDiary"><ion-icon name="book-outline"></ion-icon>Diary</button></NavLink>
                  <NavLink to="./profile/activity" className="textLink"><button className="userButtonWatchActivity"><ion-icon name="timer-outline"></ion-icon>Activity</button></NavLink>
                  <NavLink to="./profile/reviews" className="textLink"><button className="userButtonWatchReviews"><ion-icon name="pencil-outline"></ion-icon>Reviews</button></NavLink>
                </div>
                <div className="userProfileActivityContainerBottom">
                  <NavLink to="./profile/lists" className="textLink"><button className="userButtonWatchLists"><ion-icon name="list-outline"></ion-icon>Lists</button></NavLink>
                  <NavLink to="./profile/friends" className="textLink"><button className="userButtonWatchFriends"><ion-icon name="people-outline"></ion-icon>Friends</button></NavLink>
                  <NavLink to="./profile/likes" className="textLink"><button className="userButtonWatchLikes"><ion-icon name="heart-outline"></ion-icon>Likes</button></NavLink>
                  <NavLink to="./profile/stats" className="textLink"><button className="userButtonWatchStats"><ion-icon name="stats-chart-outline"></ion-icon>Stats</button></NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="userProfileAbout">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis itaque magni amet quasi, labore, sequi obcaecati minus distinctio numquam, sunt similique quisquam error! Id voluptate beatae magni ratione excepturi odit molestiae architecto quod provident quisquam aperiam ipsum impedit sed assumenda laudantium perferendis, illo ex amet accusantium? Cupiditate, ea? Quia!</p>  
            </div>  
          <MainProfile />
       </div>
  );
};

export default Profile;
