import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../views';
import { Movies } from '../views';
import { Shows } from '../views';
import { Login } from '../views';
import { Contact } from '../views';
import { About } from '../views';
import {Profile} from '../views';
import {SignUp} from '../views/';

const Main = () => {
  return (
    <main class="y-wrap">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element ={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;