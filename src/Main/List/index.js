import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card';

const CardList = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const apiUrl = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = { persons: [] };
  }

  componentDidMount() {
    axios.get(apiUrl)
      .then((res) => {
        this.setState({ persons: res.data.items });
      });
  }

  render() {
    const { persons } = this.state;

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
}
