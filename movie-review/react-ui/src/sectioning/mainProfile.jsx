import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Activity, Diary, Friends, Likes, Lists, Movies, ProfileLanding, Reviews, Shows, Stats } from '../views/profileViews';

const MainProfile = () => {
  return (
    <div className="y-wrap">
      <Routes>
        <Route path="/profile/landing" element={<ProfileLanding />} />
        <Route path="/profile/movies" element={<Movies />} />
        <Route path="/profile/shows" element={<Shows />} />
        <Route path="/profile/diary" element={<Diary />} />
        <Route path="/profile/activity" element ={<Activity/>} />
        <Route path="/profile/reviews" element={<Reviews />} />
        <Route path="/profile/lists" element={<Lists />} />
        <Route path="/profile/friends" element={<Friends />} />
        <Route path="/profile/likes" element={<Likes />} />
        <Route path="/profile/stats" element={<Stats />} />
      </Routes>
    </div>
  );
};

export default MainProfile;