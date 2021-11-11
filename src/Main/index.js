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
        <TopAppBar />
        {isError ? <ErrorScreen /> : ''}
        {isLoading ? <LoadingScreen /> : <List persons={persons} />}
      </MainWrap>
    );
  }
}
