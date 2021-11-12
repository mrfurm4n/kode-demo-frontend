import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sort from './Sort';
import TabsBar from './TabsBar';

const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  color: #050510;
  line-height: 1.2;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
`;

export default class TopAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      sortOpen: false,
    };
  }

  switchOpeningSort = (current) => this.setState({ sortOpen: !current });

  render() {
    const { sortOpen } = this.state;
    const {
      tabsTitles,
      switchOpeningTab,
      openedTab,
    } = this.props;
    return (
      <>
        {sortOpen && (
          <Sort
            sortOpen={sortOpen}
            switchOpeningSort={this.switchOpeningSort}
          />
        )}
        <Title>Поиск</Title>
        <SearchBar
          sortOpen={sortOpen}
          switchOpeningSort={this.switchOpeningSort}
        />
        <TabsBar
          openedTab={openedTab}
          switchOpeningTab={switchOpeningTab}
          tabsTitles={tabsTitles}
        />
      </>
    );
  }
}
