import React from 'react';

const Profile= () => {
  return (
       <div className="y-wrap">
          <h1>Profile</h1>
          <div className="user-profile-container">
            <div className="user-profile">
              <h2><ion-icon name="person-circle-outline"></ion-icon>Name</h2>
              <h3>Location:</h3>
              <h3>About:</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus.</p>
            </div>
            <div className="watch-list">
              <div className="to-watch">
                <fieldset>
                  <legend><h3>TO WATCH</h3></legend>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem, ipsum.</p>
                </fieldset>
              </div>
              <div className="just-watched">
                <fieldset>
                  <legend><h3>Just Watched</h3></legend>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem, ipsum.</p>
                </fieldset>                
              </div>
            </div>  
          </div>
          <div className="user-list">
            <h3>Lists</h3>
            <div className="user-list1">1</div>
            <div className="user-list2">2</div>
            <div className="user-list3">3</div>
          </div>
       </div>
  );
};

export default Profile;
