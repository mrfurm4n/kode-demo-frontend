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

// "hardcode" titles of tabs
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
  const [isOnline, setIsOnline] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState([false, '']);

  // init default states if app online
  const initOnlineStates = () => {
    setIsOnline(window.navigator.onLine);
    setIsError([false, '']);
    setIsLoading(true);
  };

  // change state of connected
  const checkConnected = () => (
    !isOnline && window.navigator.onLine ? setIsConnected(true) : setIsConnected(false)
  );

  // get data if app online
  useEffect(() => {
    if (isOnline) {
      initOnlineStates();
      axios.get(apiUrl)
        .then((res) => {
          setPersons(res.data.items);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError([true, 'criticalError']);
          setIsLoading(false);
        });
    }
  }, [isOnline]);

  // timer for detect online/offline
  useEffect(() => {
    const timer = setInterval(() => {
      checkConnected();
      setIsOnline(window.navigator.onLine);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main isConnected={isConnected} tabsTitles={tabsTitles} persons={persons} isError={isError} isOnline={isOnline} isLoading={isLoading} setIsError={setIsError} />} />
        <Route path="/profile/:id" element={<Profile tabsTitles={tabsTitles} isLoading={isLoading} persons={persons} />} />
      </Routes>
    </BrowserRouter>
  );
};
