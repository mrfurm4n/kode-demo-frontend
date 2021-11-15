import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../UI/icons/search.svg';
import sortIcon from '../../../UI/icons/sort.svg';

const SearchBar = styled.div`
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

const SearchIcon = styled.img`
  display: inline-block;
  object-fit: contain;
  width: 24px;
  height: 24px;
  opacity: ${(props) => (props.isInputFocused ? '1' : '0.4')};
  transition: opacity 0.2s;
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
  background: url(${sortIcon}) no-repeat center center;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
  filter: grayscale(${(props) => (props.isBirthdaySortType ? '0' : '1')});
  opacity: ${(props) => (props.isBirthdaySortType ? '1' : '0.4')};
  transition: filter 0.2s, opacity 0.2s;
`;

export default (props) => {
  const {
    switchOpeningSort,
    sortOpen,
    changeSearchQuery,
    searchQuery,
    sortType,
  } = props;

  const isBirthdaySortType = sortType === 'birthday';

  const [isInputFocused, setIsInputFocused] = useState(false);

  const switchOpenSort = () => {
    switchOpeningSort(sortOpen);
  };

  const handleChange = (event) => {
    changeSearchQuery(event.target.value);
  };

  const onFocus = () => setIsInputFocused(true);

  const onBlur = () => setIsInputFocused(false);

  return (
    <SearchBar>
      <SearchIcon isInputFocused={isInputFocused} src={searchIcon} />
      <Input onChange={handleChange} onFocus={onFocus} onBlur={onBlur} value={searchQuery} placeholder="Введи имя, фамилию, тег..." />
      <SortButton isBirthdaySortType={isBirthdaySortType} onClick={switchOpenSort} />
    </SearchBar>
  );
};
