// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import Bottom from './Bottom';
import { MainWrap } from '../Main';
import LoadingScreen from '../Main/LoadingScreen';

export default (props) => {
  const { persons, isLoading } = props;
  const { id } = useParams();

  const filteredPersons = persons.filter(
    (person) => (
      person
        .id
        .includes(id)
    ),
  );

  return (
    <MainWrap>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Head person={filteredPersons} />
          <Bottom person={filteredPersons} />
        </>
      )}
    </MainWrap>
  );
};
