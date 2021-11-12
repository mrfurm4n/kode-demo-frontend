import React from 'react';
import styled from 'styled-components';

const TabItem = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;
  font-size: 15px;
  line-height: 20px;
  background: transparent;
  cursor: pointer;
  border: none;
  font-weight: 500;
  transition: border 0.3s, color 0.3s;

  border-bottom: 2px solid ${(props) => (props.isOpen ? '#6534FF' : 'transparent')};
  color: ${(props) => (props.isOpen ? '#050510' : '#97979B')};
`;

export default class Tab extends React.Component {
  switchOpeningTab = () => {
    const { switchOpeningTab, id } = this.props;
    switchOpeningTab(id);
  };

  render() {
    const {
      openedTab, id, title,
    } = this.props;
    const isOpen = openedTab === id;

    return (
      <TabItem
        isOpen={isOpen}
        onClick={this.switchOpeningTab}
      >
        {title}
      </TabItem>
    );
  }
}
