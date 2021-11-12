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

  render() {
    const { persons, isError, isLoading } = this.state;

    return (
      <MainWrap>
        <TopAppBar tabsTitles={tabsTitles} />
        {isError ? <ErrorScreen /> : ''}
        {isLoading ? <LoadingScreen /> : <List tabsTitles={tabsTitles} persons={persons} />}
      </MainWrap>
    );
  }
}
