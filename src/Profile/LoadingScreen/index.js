import React from 'react';
import styled from 'styled-components';
import MyLoader from './MyLoader';

const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default () => (
  <LoadingScreen>
    <MyLoader />
  </LoadingScreen>
);
