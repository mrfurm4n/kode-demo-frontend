import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: #050510;
  line-height: 1.2;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
`;

export default () => (
  <>
    <Title>Поиск</Title>
    <SearchBar />
  </>
);
