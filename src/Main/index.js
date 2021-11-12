import React from 'react';
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

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      isLoading: true,
      isError: false,
      openedTab: tabsTitles[0].id,
    };
  }

  componentDidMount() {
    axios.get(apiUrl)
      .then((res) => {
        this.setState({
          persons: res.data.items,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ isError: true, isLoading: false }));
  }

  switchOpeningTab = (id) => {
    const { openedTab } = this.state;
    if (openedTab !== id) {
      this.setState({ openedTab: id });
    }
  };

  render() {
    const {
      persons,
      isError,
      isLoading,
      openedTab,
    } = this.state;
    return (
      <MainWrap>
        <TopAppBar
          switchOpeningTab={this.switchOpeningTab}
          tabsTitles={tabsTitles}
          openedTab={openedTab}
        />
        {isError ? <ErrorScreen /> : ''}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <List openedTab={openedTab} tabsTitles={tabsTitles} persons={persons} />
        )}
      </MainWrap>
    );
  }
}
