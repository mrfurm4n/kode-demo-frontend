import React from 'react';
import styled, { css } from 'styled-components';
import starIcon from '../../UI/icons/star.svg';
import phoneIcon from '../../UI/icons/phone.svg';

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

const monthsTitles = ['января', 'февраля', 'марта', 'мая', 'апреля', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const currentYear = new Date().getFullYear();

const getYear = (date) => Number(date.slice(0, 4));
const getMonth = (date) => Number(date.slice(5, 7));
const getDay = (date) => Number(date.slice(8, 10));

// convert birthday (russian's titles of months)
const getConvertBirthday = (birthday) => `${getDay(birthday)} ${monthsTitles[getMonth(birthday)]} ${getYear(birthday)}`;

// convert age (russian)
const convertAge = (birthday) => {
  const age = currentYear - getYear(birthday);

  let ageRemainder = age % 100;
  if (ageRemainder >= 5 && ageRemainder <= 20) return `${age} лет`;

  ageRemainder %= 10;
  if (ageRemainder === 1) return `${age} год`;
  if (ageRemainder >= 2 && ageRemainder <= 4) return `${age} года`;

  return `${age} лет`;
};

// remove symbols in phone
const getConvertPhone = (phone) => phone.replace(/-/g, '');

export default (props) => {
  const { person } = props;
  const {
    phone,
    birthday,
  } = person[0];

  return (
    <Bottom>
      <CharItem>
        <Icon src={starIcon} />
        <Birthday>{getConvertBirthday(birthday)}</Birthday>
        <Age>{convertAge(birthday)}</Age>
      </CharItem>
      <CharItem>
        <Icon src={phoneIcon} />
        <Phone href={`tel:+1${getConvertPhone(phone)}`}>{phone}</Phone>
      </CharItem>
    </Bottom>
  );
};
