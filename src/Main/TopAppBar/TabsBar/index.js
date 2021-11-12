import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrap = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom 0.33px solid #C3C3C6;
`;

export default class TabsBar extends React.Component {
  constructor({ tabsTitles }) {
    super();
    // const { tabsTitles } = this.props;
    this.state = {
      openedTab: tabsTitles[0].id,
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
    const { tabsTitles } = this.props;
    return (
      <TabsWrap>
        {tabsTitles.map((item) => (
          <Tab
            key={item.id}
            id={item.id}
            title={item.title}
            openedTab={openedTab}
            switchOpeningTab={this.switchOpeningTab}
          />
        ))}
      </TabsWrap>
    );
  }
}
