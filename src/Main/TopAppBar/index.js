import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sort from './Sort';
import TabsBar from './TabsBar';

const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: #050510;
  line-height: 1.2;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
`;

const hideSort = true;

export default ({ tabsTitles, switchOpeningTab, openedTab }) => (
  <>
    {!hideSort && (<Sort />)}
    <Title>Поиск</Title>
    <SearchBar />
    <TabsBar
      openedTab={openedTab}
      switchOpeningTab={switchOpeningTab}
      tabsTitles={tabsTitles}
    />
  </>
);
