import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrap = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom 0.33px solid #C3C3C6;
`;

export default ({ tabsTitles, openedTab, switchOpeningTab }) => (
  <TabsWrap>
    {tabsTitles.map((item) => (
      <Tab
        key={item.id}
        id={item.id}
        title={item.title}
        openedTab={openedTab}
        switchOpeningTab={switchOpeningTab}
      />
    ))}
  </TabsWrap>
);
