import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export const CardList = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

function List({ persons }) {
  return (
    <CardList>
      {persons.map((person) => (
        <Card
          key={person.id}
          avatarUrl={person.avatarUrl}
          firstName={person.firstName}
          lastName={person.lastName}
          userTag={person.userTag}
          department={person.department}
          position={person.position}
        />
      ))}
    </CardList>
  );
}

export default List;
