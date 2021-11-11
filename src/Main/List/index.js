import React from 'react';
import styled from 'styled-components';
import MyLoader from './MyLoader';
import Card from './Card';

const List = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const loading = true;

export default () => (
  <List>
    {loading ? <MyLoader /> : <Card />}
  </List>
);
