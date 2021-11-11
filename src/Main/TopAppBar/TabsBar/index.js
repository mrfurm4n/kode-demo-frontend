import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabsBar = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom 0.33px solid #C3C3C6;
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 0;
    display: none;
  }
`;

const tabsTitles = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default () => (
  <TabsBar>
    {tabsTitles.map((title) => (
      <Tab title={title} />
    ))}
  </TabsBar>
);
