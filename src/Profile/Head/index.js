/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import prevArrow from '../../UI/icons/prevArrow.svg';

const Head = styled.div`
  background: #F7F7F8;
  padding-top: 22px;
  padding-bottom: 24px;
  text-align: center;
`;

const PrevButton = styled(Link)`
  height: 24px;
  width: 24px;
  display: block;
  border: none;
  background: url(${prevArrow}) no-repeat center;
  background-size: contain;
  margin-left: 24px;
  cursor: pointer;
`;

const Avatar = styled.img`
  box-shadow: 0px 8px 12px rgba(22, 30, 52, 0.039);
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  width: 104px;
  height: 104px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 26px;
  margin-bottom: 24px;
  display: block;
`;

const Name = styled.span`
  color: #050510;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin-right: 4px;
  display: inline-block;
`;

const Tag = styled.span`
  color: #97979B;
  font-size: 17px;
  line-height: 22px;
  font-weight: 400;
`;

const Departament = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: #55555C;
  margin-top: 12px;
`;

export default (props) => {
  const { person, tabsTitles } = props;
  const {
    avatarUrl,
    firstName,
    lastName,
    userTag,
    department,
  } = person[0];

  const convertedDepartament = tabsTitles.filter((obj) => (obj.id === department ? obj : ''));

  return (
    <Head>
      <PrevButton to="/" />
      <Avatar src={avatarUrl} />
      <Name>{`${firstName} ${lastName}`}</Name>
      <Tag>{userTag}</Tag>
      <Departament>{convertedDepartament[0].title}</Departament>
    </Head>
  );
};
