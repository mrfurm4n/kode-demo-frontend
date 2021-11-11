import React from 'react';
import styled from 'styled-components';

const Input = styled.span`
  margin-top: 36px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
  cursor: pointer;
`;

const Circle = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid #6534FF;
`;

export default ({ title }) => (
  <Input>
    <Circle />
    {title}
  </Input>
);
