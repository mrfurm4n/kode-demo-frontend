import React from 'react';
import styled from 'styled-components';
import TopAppBar from './TopAppBar';
import List from './List';
import ErrorScreen from './ErrorScreen';

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const isError = false;

export default () => (
  <Main>
    <TopAppBar />
    {isError ? <ErrorScreen /> : <List />}
  </Main>
);
