import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TopAppBar from './TopAppBar';
import List from './List';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

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

const apiUrl = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

export default () => {
  const [persons, setPersons] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openedTab, setOpenedTab] = useState(tabsTitles[0].id);
  const [sortType, setSortType] = useState('alphabet');

  const switchOpeningTab = (id) => (openedTab !== id) && setOpenedTab(id);
  const switchCheckingSort = (type) => (sortType !== type) && setSortType(type);

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setPersons(res.data.items);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <Main>
      <TopAppBar
        switchOpeningTab={switchOpeningTab}
        switchCheckingSort={switchCheckingSort}
        tabsTitles={tabsTitles}
        openedTab={openedTab}
        sortType={sortType}
      />
      {isError && (<ErrorScreen />)}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <List openedTab={openedTab} tabsTitles={tabsTitles} persons={persons} />
      )}
    </Main>
  );
};
