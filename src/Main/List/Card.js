import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  margin-right: 16px;
  width: 72px;
  height: 72px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const Chars = styled.div``;

const Name = styled.span`
  color: #050510;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  margin-right: 4px;
`;

const Tag = styled.span`
  color: #97979B;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const Departament = styled.span`
  color: #55555C;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  display: block;
  margin-top: 3px;
`;

export default () => (
  <Card>
    <Avatar />
    <Chars>
      <Name>Алексей Миногаров</Name>
      <Tag>mi</Tag>
      <Departament>Analyst</Departament>
    </Chars>
  </Card>
);
