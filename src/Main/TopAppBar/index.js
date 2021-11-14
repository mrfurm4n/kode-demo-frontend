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
  color: ${(props) => {
    if (!props.isOnline) return '#fff';
    if (props.isConnected) return '#fff';
    return '#050510';
  }};

  line-height: 1.2;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
`;

const OfflineBar = styled.div`
  background: ${(props) => {
    if (!props.isOnline) return '#F44336';
    if (props.isConnected) return '#6534FF';
    return 'transaprent';
  }};
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
    isConnected,
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
      <OfflineBar isOnline={isOnline} isConnected={isConnected}>
        <Title isOnline={isOnline} isConnected={isConnected}>Поиск</Title>
        {isOnline && !isConnected && (
          <SearchBar
            sortOpen={sortOpen}
            switchOpeningSort={switchOpeningSort}
            changeSearchQuery={changeSearchQuery}
            searchQuery={searchQuery}
            sortType={sortType}
          />
        )}
        {!isOnline && !isConnected && (
          <OfflineTitle>Не могу обновить данные. Проверь соединение с интернетом.</OfflineTitle>
        )}
        {isConnected && (
          <OfflineTitle>Секундочку, гружусь...</OfflineTitle>
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
