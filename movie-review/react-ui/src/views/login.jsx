import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../components/login/login';

const Login= () => {

    // const handleLogin = ((values,actions) => {
    //     //perform the login request
    //     const vals = {...values}
    //     actions.resetForm()
    //     fetch('http://localhost:8080/login', {
    //         method: "POST",
    //         credentials: "include",
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(vals),
    //     }).catch(err => {
    //         return;
    //     }).then (res => {
    //         if (!res || !res.ok || res.status >= 400) {
    //             return;
    //         }
    //         return res.json();
    //       })
    //       .then(data => {
    //         if(!data) return;
    //         console.log(data)
    //       })
    // })

  return (
       <div className="y-wrap">               
            <LoginForm />
            <NavLink to="../signup">Register</NavLink>
        </div>
        );
      };

export default Login;
