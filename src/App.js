/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';

const apiUrl = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

export default () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState([false, '']);

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setPersons(res.data.items);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError([true, 'criticalError']);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main persons={persons} isError={isError} isLoading={isLoading} setIsError={setIsError} />} />
        <Route path="/profile/:id" element={<Profile isLoading={isLoading} persons={persons} />} />
      </Routes>
    </BrowserRouter>
  );
};
