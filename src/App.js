/* eslint-disable react/jsx-fragments */
import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
