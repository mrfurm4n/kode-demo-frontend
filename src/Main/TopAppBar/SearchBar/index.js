import React from 'react';
import styled from 'styled-components';
import search from '../../../UI/search.svg';
import sort from '../../../UI/sort.svg';

const Bar = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 16px;
  margin-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;
  background: #F7F7F8;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchButton = styled.button`
  border: none;
  display: inline-block;
  background: url(${search}) no-repeat center center;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 8px;
  margin-left: 8px;
  font-size: 15px;
  line-height: 20px;
  color: #050510;
  font-weight: 400;
  border: none;
  background: transparent;

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: #C3C3C6;
    font-weight: 500;
  }

  :focus {
    outline: none;
  }
`;

const SortButton = styled.button`
  border: none;
  display: inline-block;
  background: url(${sort}) no-repeat center center;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default () => (
  <Bar>
    <SearchButton />
    <Input placeholder="Введи имя, тег, почту..." />
    <SortButton />
  </Bar>
);
