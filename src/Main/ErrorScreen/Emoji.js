import React from 'react';
import styled from 'styled-components';

const Emoji = styled.span`
  font-size: 56px;
  width: 56px;
  height: 56px;
  margin-bottom: 8px;
`;

export default ({ label, symbol }) => (
  <Emoji
    role="img"
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </Emoji>
);
