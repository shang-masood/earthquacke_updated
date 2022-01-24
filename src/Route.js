
import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './components/pages/Home.js';
import Details from './components/pages/Details.js';

const NavBar = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Details/:eventId" element={<Details />}></Route>
  </Routes>
);

export default NavBar;