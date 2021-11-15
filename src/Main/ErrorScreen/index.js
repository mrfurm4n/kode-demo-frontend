import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';

const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.span`
  color: #050510;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 12px;
`;

const Description = styled.span`
  color: #97979B;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 12px;
  font-weight: 400;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  color: #6534FF;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
`;

const refreshPage = () => window.location.reload();

export default (props) => {
  const { errorData } = props;
  const { symbol, label } = errorData.emoji;
  const { title, description, needButton } = errorData;
  return (
    <Screen>
      <Emoji symbol={symbol} label={label} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {needButton ? <Button onClick={refreshPage}>Попробовать снова</Button> : ''}
    </Screen>
  );
};
