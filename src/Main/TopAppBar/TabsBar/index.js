import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrap = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom 0.33px solid #C3C3C6;
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

export default class TabsBar extends React.Component {
  constructor() {
    super();
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
