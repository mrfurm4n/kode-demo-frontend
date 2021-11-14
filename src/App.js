import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';

const apiUrl = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

const tabsTitles = [
  {
    id: 'all',
    title: 'Все',
  },
  {
    id: 'android',
    title: 'Android',
  },
  {
    id: 'ios',
    title: 'iOS',
  },
  {
    id: 'design',
    title: 'Дизайн',
  },
  {
    id: 'management',
    title: 'Менеджмент',
  },
  {
    id: 'qa',
    title: 'QA',
  },
  {
    id: 'back_office',
    title: 'Бэк-офис',
  },
  {
    id: 'frontend',
    title: 'Frontend',
  },
  {
    id: 'hr',
    title: 'HR',
  },
  {
    id: 'pr',
    title: 'PR',
  },
  {
    id: 'backend',
    title: 'Backend',
  },
  {
    id: 'support',
    title: 'Техподдержка',
  },
  {
    id: 'analytics',
    title: 'Аналитика',
  },
];

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
        <Route path="/" exact element={<Main tabsTitles={tabsTitles} persons={persons} isError={isError} isLoading={isLoading} setIsError={setIsError} />} />
        <Route path="/profile/:id" element={<Profile tabsTitles={tabsTitles} isLoading={isLoading} persons={persons} />} />
      </Routes>
    </BrowserRouter>
  );
};
