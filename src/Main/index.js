import React from 'react';
import styled from 'styled-components';
import TopAppBar from './TopAppBar';
import List from './List';
import ErrorScreen from './ErrorScreen';

export const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const isError = false;

const Main = () => (
  <MainWrap>
    <TopAppBar />
    {isError ? <ErrorScreen /> : <List />}
  </MainWrap>
);

export default Main;
