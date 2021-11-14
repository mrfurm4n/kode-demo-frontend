import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

export const CardList = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function List(props) {
  const {
    persons,
    tabsTitles,
    openedTab,
    sortType,
  } = props;

  const [isSeparatorUsed] = useState(false);

  const isBirthdaySortType = sortType === 'birthday';

  const todayDate = new Date();
  const formatToday = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
  const nextYear = `${todayDate.getFullYear() + 1}`;

  const getMonth = (birthday) => Number(birthday.slice(5, 7));
  const getDay = (birthday) => Number(birthday.slice(8, 10));

  const isNextYear = (birthday) => {
    if (getMonth(birthday) === getMonth(formatToday)) return getDay(birthday) < getDay(formatToday);
    return getMonth(birthday) < getMonth(formatToday);
  };

  const compareDay = (first, second) => (getDay(first) < getDay(second) ? 1 : -1);
  const compareMonth = (first, second) => (getMonth(first) > getMonth(second) ? 1 : -1);
  const compareYear = (first, second) => (isNextYear(first) < isNextYear(second) ? -1 : 1);

  const convertDepartament = (departament) => tabsTitles.filter((obj) => (obj.id === departament ? obj : ''));

  return (
    <CardList>
      {
        persons
          .sort((a, b) => {
            if (isBirthdaySortType) return compareDay(a.birthday, b.birthday);
            return a.lastName > b.lastName ? 1 : -1;
          })
          .sort((a, b) => {
            if (isBirthdaySortType) return compareMonth(a.birthday, b.birthday);
            return a.firstName > b.firstName ? 1 : -1;
          })
          .sort((a, b) => {
            if (isBirthdaySortType) return compareYear(a.birthday, b.birthday);
            return null;
          })
          .map((person) => (
            <Card
              key={person.id}
              isSeparatorUsed={isSeparatorUsed}
              isBirthdaySortType={isBirthdaySortType}
              nextYear={nextYear}
              isNextYear={isNextYear}
              openedTab={openedTab}
              birthdayMonth={getMonth(person.birthday)}
              birthdayDay={getDay(person.birthday)}
              department={convertDepartament(person.department)}
              person={person}
            />
          ))
      }
    </CardList>
  );
}

export default List;
