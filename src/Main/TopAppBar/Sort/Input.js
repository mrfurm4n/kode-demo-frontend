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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
  box-sizing: border-box;
  border: ${(props) => (props.active ? '8px' : '2px')} solid #6534FF;
  transition: border-width 0.2s ease-in-out;
`;

export default (props) => {
  const {
    title,
    type,
    sortType,
    switchCheckingSort,
    switchOpenSort,
    sortOpen,
  } = props;

  const switchCheckSort = () => {
    switchCheckingSort(type);
    switchOpenSort(sortOpen);
  };

  return (
    <Input onClick={switchCheckSort}>
      <Circle active={sortType === type} />
      {title}
    </Input>
  );
};
