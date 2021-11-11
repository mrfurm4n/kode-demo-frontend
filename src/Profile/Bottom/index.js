import React from 'react';
import styled, { css } from 'styled-components';
import star from '../../UI/icons/star.svg';
import phone from '../../UI/icons/phone.svg';

const Bottom = styled.div`
  padding-top: 26px;
  padding-right: 16px;
  padding-left: 16px;
  background: #fff;
`;

const CharItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 24px;

  :not(:last-child) {
    border-bottom: 0.5px solid #F7F7F8;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 12px;
`;

const baseTitleStyles = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;

const Birthday = styled.span`
  ${baseTitleStyles}
`;

const Phone = styled.a`
  ${baseTitleStyles}
  text-decoration: none;
`;

const Age = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #97979B;
  position: absolute;
  right: 0;
`;

export default () => (
  <Bottom>
    <CharItem>
      <Icon src={star} />
      <Birthday>5 июня 1996</Birthday>
      <Age>24 года</Age>
    </CharItem>
    <CharItem>
      <Icon src={phone} />
      <Phone href="tel:+79999009090">+7 (999) 900 90 90</Phone>
    </CharItem>
  </Bottom>
);
