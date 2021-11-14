import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sort from './Sort';
import TabsBar from './TabsBar';

const TopAppBar = styled.div``;

const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => (props.isOnline ? '#050510' : '#fff')};
  line-height: 1.2;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
  transition: color 0.2s;
`;

const OfflineBar = styled.div`
  background: ${(props) => (props.isOnline ? 'transparent' : '#F44336')};
  transition: background-color 0.2s;
`;

const OfflineTitle = styled.span`
  display: block;
  padding-top: 8px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 30px;
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export default (props) => {
  const [sortOpen, setSortOpen] = useState(false);

  const switchOpeningSort = (current) => setSortOpen(!current);

  const {
    tabsTitles,
    switchOpeningTab,
    openedTab,
    switchCheckingSort,
    changeSearchQuery,
    searchQuery,
    sortType,
    isOnline,
  } = props;

  return (
    <TopAppBar>
      {sortOpen && (
        <Sort
          sortOpen={sortOpen}
          switchOpeningSort={switchOpeningSort}
          switchCheckingSort={switchCheckingSort}
          sortType={sortType}
        />
      )}
      <OfflineBar isOnline={isOnline}>
        <Title isOnline={isOnline}>Поиск</Title>
        {isOnline && (
          <SearchBar
            sortOpen={sortOpen}
            switchOpeningSort={switchOpeningSort}
            changeSearchQuery={changeSearchQuery}
            searchQuery={searchQuery}
            sortType={sortType}
          />
        )}
        {!isOnline && (
          <OfflineTitle>Не могу обновить данные. Проверь соединение с интернетом.</OfflineTitle>
        )}
      </OfflineBar>
      <TabsBar
        openedTab={openedTab}
        switchOpeningTab={switchOpeningTab}
        tabsTitles={tabsTitles}
      />
    </TopAppBar>
  );
};
