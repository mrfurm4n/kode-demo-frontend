import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import close from '../../../UI/icons/close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 5, 16, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Window = styled.div`
  border-radius: 20px;
  background: #fff;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 24px;
  padding-bottom: 26px;
  width: 370px;
  max-width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-right: 7px;
  justify-content: center;
  position: relative;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #050510;
`;

const Button = styled.button`
  border: none;
  background: url(${close}) no-repeat center;
  background-size: contain;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export default (props) => {
  const {
    sortOpen,
    switchOpeningSort,
    sortType,
    switchCheckingSort,
  } = props;

  const switchOpenSort = () => switchOpeningSort(sortOpen);

  return (
    <Overlay>
      <Window>
        <Header>
          <Title>Сортировка</Title>
          <Button onClick={switchOpenSort} />
        </Header>
        <Input type="alphabet" sortOpen={sortOpen} switchOpenSort={switchOpenSort} switchCheckingSort={switchCheckingSort} sortType={sortType} title="По алфавиту" />
        <Input type="birthday" sortOpen={sortOpen} switchOpenSort={switchOpenSort} switchCheckingSort={switchCheckingSort} sortType={sortType} title="По дню рождения" />
      </Window>
    </Overlay>
  );
};
