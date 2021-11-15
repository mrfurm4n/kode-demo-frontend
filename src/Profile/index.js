import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import Bottom from './Bottom';
import { MainWrap } from '../Main';
import LoadingScreen from './LoadingScreen';

export default (props) => {
  const { persons, isLoading, tabsTitles } = props;
  const { id } = useParams();

  // get one person by id-filtered all persons
  const filteredPerson = persons.filter((person) => person.id.includes(id));

  return (
    <MainWrap>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Head tabsTitles={tabsTitles} person={filteredPerson} />
          <Bottom person={filteredPerson} />
        </>
      )}
    </MainWrap>
  );
};
