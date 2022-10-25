import React from 'react';

const SignUp= () => {
  return (
       <div class="y-wrap">
          <h1>SignUp Page</h1>
    <form class="form-signup">
    <div class="form-row mb-4">
        <div class="col">      
            <input type="text" id="first-name" class="first-name" placeholder="First name" />
        </div>
        <div class="col">
            <input type="text" id="last-name" class="last-name" placeholder="Last name" />
        </div>
    </div>
    <div class="email-signup-container">    
      <input type="email" id="email-signup" class="email-signup" placeholder="email" />
    </div>
    <input type="password" id="password-email" class="password-email" placeholder="Password" />
    <div class="phone-number-container">
      <input type="text" id="phone-number" class="phone-number" placeholder="Phone number"  />
    </div>
    <button class="button-signup" type="submit">Sign Up</button>   
    </form> 
        </div>
  );
};

export default SignUp;
