import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export const CardList = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

function List(props) {
  const { persons, tabsTitles, openedTab } = props;
  const convertDepartament = (departament) => tabsTitles.filter((obj) => (obj.id === departament ? obj : ''));
  return (
    <CardList>
      {persons.map((person) => (
        <Card
          key={person.id}
          avatarUrl={person.avatarUrl}
          firstName={person.firstName}
          lastName={person.lastName}
          userTag={person.userTag}
          openedTab={openedTab}
          department={convertDepartament(person.department)}
          position={person.position}
        />
      ))}
    </CardList>
  );
}

export default List;
