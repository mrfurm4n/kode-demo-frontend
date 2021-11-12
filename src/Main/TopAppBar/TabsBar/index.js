import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrap = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom 0.33px solid #C3C3C6;
`;

const tabsTitles = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default class TabsBar extends React.Component {
  constructor() {
    super();
    this.state = {
      openedTab: tabsTitles[0],
    };
  }

  switchOpeningTab = (id) => {
    const { openedTab } = this.state;
    if (openedTab !== id) {
      this.setState({ openedTab: id });
    }
  };

  render() {
    const { openedTab } = this.state;
    return (
      <TabsWrap>
        {tabsTitles.map((title) => (
          <Tab
            key={title}
            id={title}
            title={title}
            openedTab={openedTab}
            switchOpeningTab={this.switchOpeningTab}
          />
        ))}
      </TabsWrap>
    );
  }
}
