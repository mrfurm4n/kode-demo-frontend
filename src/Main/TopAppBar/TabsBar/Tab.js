import React from 'react';
import styled from 'styled-components';

const Tab = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: #97979B;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default ({ title }) => (
  <Tab>{title}</Tab>
);
