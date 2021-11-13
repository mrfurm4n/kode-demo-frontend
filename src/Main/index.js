import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TopAppBar from './TopAppBar';
import List from './List';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

export const MainWrap = styled.div`
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

const errorsData = {
  criticalError: {
    emoji: {
      symbol: '🛸',
      label: 'flying saucer',
    },
    title: 'Какой-то сверхразум все сломал',
    description: 'Постараемся быстро починить',
    needButton: true,
  },
  searchError: {
    emoji: {
      symbol: '🔍',
      label: 'magnifying glass',
    },
    title: 'Мы никого не нашли',
    description: 'Попробуй скорректировать запрос',
    needButton: false,
  },
};

function Main() {
  const [persons, setPersons] = useState([]);
  const [isError, setIsError] = useState([false, '']);
  const [isLoading, setIsLoading] = useState(true);
  const [openedTab, setOpenedTab] = useState(tabsTitles[0].id);
  const [sortType, setSortType] = useState('alphabet');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPersons = persons.filter(
    (person) => (
      person
        .firstName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ),
  );

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

  useEffect(() => {
    if (filteredPersons.length === 0 && searchQuery !== '') return setIsError([true, 'searchError']);
    return setIsError([false, '']);
  }, [searchQuery]);

  const switchOpeningTab = (id) => (openedTab !== id) && setOpenedTab(id);
  const switchCheckingSort = (type) => (sortType !== type) && setSortType(type);
  const changeSearchQuery = (query) => setSearchQuery(query);

  return (
    <MainWrap>
      <TopAppBar
        switchOpeningTab={switchOpeningTab}
        switchCheckingSort={switchCheckingSort}
        changeSearchQuery={changeSearchQuery}
        searchQuery={searchQuery}
        tabsTitles={tabsTitles}
        openedTab={openedTab}
        sortType={sortType}
      />
      {isError[0] && (<ErrorScreen errorData={errorsData[isError[1]]} />)}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <List
          openedTab={openedTab}
          sortType={sortType}
          tabsTitles={tabsTitles}
          persons={filteredPersons}
        />
      )}
    </MainWrap>
  );
}

export default Main;
