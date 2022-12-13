import React from 'react';
import {NavLink} from 'react-router-dom'
import SignupForm from '../components/login/signup';

const SignUp= () => {
  return (
       <div className="y-wrap">
          <SignupForm />
          <NavLink to="../login">Login Page</NavLink>
        </div>
  );
};

export default SignUp;
