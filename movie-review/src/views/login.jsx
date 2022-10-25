import React from 'react';
import { NavLink } from 'react-router-dom';


const Login= () => {
  return (
       <div class="y-wrap">    
          <form class="form-login">
              <h1 class="title-login">Login</h1>
              <input type="email" id="email" class="email" placeholder="email" />
              <input type="password" id="password" class="password" placeholder="password" />            
                  <div>
                      <div class="remember-checkbox">
                          <input type="checkbox" class="remember" id="remember" />
                          <label class="remember" for="remember">Remember me</label>
                      </div>
                       <div>    
                          <NavLink to="../signup">Forgot password?</NavLink>
                      </div>
                  </div>
              <button class="button-login" type="submit">Login</button>
              <p>Not a member?
                  <NavLink to="../signup">Register</NavLink>
              </p>
          </form>
        </div>
        );
      };

export default Login;
