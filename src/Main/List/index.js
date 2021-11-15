import React from 'react';
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

// get dates and format date
const todayDate = new Date();
const nextYear = `${todayDate.getFullYear() + 1}`;
const formatToday = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;

// slice string-date
const getMonth = (birthday) => Number(birthday.slice(5, 7));
const getDay = (birthday) => Number(birthday.slice(8, 10));

// get boolean of next year
export const isNextYear = (birthday) => {
  if (getMonth(birthday) === getMonth(formatToday)) return getDay(birthday) < getDay(formatToday);
  return getMonth(birthday) < getMonth(formatToday);
};

// comare dates
const compareDay = (first, second) => (getDay(first) < getDay(second) ? 1 : -1);
const compareMonth = (first, second) => (getMonth(first) > getMonth(second) ? 1 : -1);
const compareYear = (first, second) => (isNextYear(first) < isNextYear(second) ? -1 : 1);

function List(props) {
  const {
    persons,
    tabsTitles,
    openedTab,
    sortType,
  } = props;

  const isBirthdaySortType = sortType === 'birthday';

  // convert departament (russian titles of tabs)
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
              isBirthdaySortType={isBirthdaySortType}
              openedTab={openedTab}
              nextYear={nextYear}
              isNextYear={isNextYear}
              department={convertDepartament(person.department)}
              birthdayMonth={getMonth(person.birthday)}
              birthdayDay={getDay(person.birthday)}
              person={person}
            />
          ))
      }
    </CardList>
  );
}

export default List;
