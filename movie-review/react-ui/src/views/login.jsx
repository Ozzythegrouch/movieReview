import React from 'react';
import { NavLink } from 'react-router-dom';


const Login= () => {
  return (
       <div className="y-wrap">    
          <form className="form-login">
              <h1 className="title-login">Login</h1>
              <input type="email" id="email" className="email" placeholder="email" />
              <input type="password" id="password" className="password" placeholder="password" />            
                  <div>
                      <div className="remember-checkbox">
                          <input type="checkbox" className="remember" id="remember" />
                          <label className="remember" htmlFor="remember">Remember me</label>
                      </div>
                       <div>    
                          <NavLink to="../signup">Forgot password?</NavLink>
                      </div>
                  </div>
              <button className="button-login" type="submit">Login</button>
              <p>Not a member?
                  <NavLink to="../signup">Register</NavLink>
              </p>
          </form>
        </div>
        );
      };

export default Login;
