import React from 'react';
import styled from 'styled-components';

const Tab = styled.button`
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
  white-space: nowrap;

  border-bottom: 2px solid ${(props) => (props.isOpen ? '#6534FF' : 'transparent')};
  color: ${(props) => (props.isOpen ? '#050510' : '#97979B')};
`;

export default (props) => {
  const {
    switchOpeningTab,
    id,
    openedTab,
    title,
  } = props;

  const switchOpenTab = () => switchOpeningTab(id);

  return (
    <Tab
      isOpen={openedTab === id}
      onClick={switchOpenTab}
    >
      {title}
    </Tab>
  );
};
