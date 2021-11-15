import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from './List';
import TopAppBar from './TopAppBar';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

export const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

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

function Main(props) {
  const {
    persons,
    isError,
    isLoading,
    isOnline,
    isConnected,
    setIsError,
    tabsTitles,
  } = props;

  const [openedTab, setOpenedTab] = useState(tabsTitles[0].id);
  const [sortType, setSortType] = useState('alphabet');
  const [searchQuery, setSearchQuery] = useState('');

  // change states
  const switchOpeningTab = (id) => (openedTab !== id) && setOpenedTab(id);
  const switchCheckingSort = (type) => (sortType !== type) && setSortType(type);
  const changeSearchQuery = (query) => setSearchQuery(query);

  // filter persons by searching query
  const filteredPersons = persons.filter(
    (person) => (
      (person
        .firstName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      || person
        .lastName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      || person
        .userTag
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      ) && person
        .department
        .includes(openedTab !== 'all' ? openedTab : '')
    ),
  );

  // switch state of searching error
  useEffect(() => {
    if (filteredPersons.length === 0 && searchQuery !== '') return setIsError([true, 'searchError']);
    return setIsError([false, '']);
  }, [searchQuery, openedTab]);

  return (
    <MainWrap>
      <TopAppBar
        switchCheckingSort={switchCheckingSort}
        changeSearchQuery={changeSearchQuery}
        switchOpeningTab={switchOpeningTab}
        isConnected={isConnected}
        searchQuery={searchQuery}
        tabsTitles={tabsTitles}
        openedTab={openedTab}
        sortType={sortType}
        isOnline={isOnline}
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
