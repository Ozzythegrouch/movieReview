import React from 'react';

const Profile= () => {
  return (
       <div class="y-wrap">
          <h1>Profile</h1>
          <div class="user-profile-container">
            <div class="user-profile">
              <h2><ion-icon name="person-circle-outline"></ion-icon>Name</h2>
              <h3>Location:</h3>
              <h3>About:</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus.</p>
            </div>
            <div class="watch-list">
              <div class="to-watch">
                <fieldset>
                  <legend><h3>TO WATCH</h3></legend>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem, ipsum.</p>
                </fieldset>
              </div>
              <div class="just-watched">
                <fieldset>
                  <legend><h3>Just Watched</h3></legend>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem, ipsum.</p>
                </fieldset>                
              </div>
            </div>  
          </div>
          <div class="user-list">
            <h3>Lists</h3>
            <div class="user-list1">1</div>
            <div class="user-list2">2</div>
            <div class="user-list3">3</div>
          </div>
       </div>
  );
};

export default Profile;
