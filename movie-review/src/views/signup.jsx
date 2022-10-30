import React from 'react';

const SignUp= () => {
  return (
       <div className="y-wrap">
          <h1>SignUp Page</h1>
    <form className="form-signup">
    <div className="name-signup-container">
        <div className="first-name-container">      
            <input type="text" id="first-name" className="first-name" placeholder="First name" />
        </div>
        <div className="last-name-container">
            <input type="text" id="last-name" className="last-name" placeholder="Last name" />
        </div>
    </div>
    <div className="email-signup-container">    
      <input type="email" id="email-signup" className="email-signup" placeholder="email" />
    </div>
    <input type="password" id="password-email" className="password-email" placeholder="Password" />
    <div className="phone-number-container">
      <input type="text" id="phone-number" className="phone-number" placeholder="Phone number"  />
    </div>
    <button className="button-signup" type="submit">Sign Up</button>   
    </form> 
        </div>
  );
};

export default SignUp;
