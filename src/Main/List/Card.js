import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  position: relative;
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

const Birthday = styled.span`
  position: absolute;
  right: 0;
  color: #55555C;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
`;

const BirthdaySeparator = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #C3C3C6;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 24px;
  margin-top: 12px;
  margin-right: 24px;
  margin-left: 24px;

  ::after,
  ::before {
    content: '';
    height: 0.5px;
    background-color: #C3C3C6;
    width: calc(50% - 80px);
  }
`;

const titlesMonths = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'нояб', 'дек'];

export default (props) => {
  const {
    department,
    openedTab,
    birthdayDay,
    birthdayMonth,
    nextYear,
    isNextYear,
    isBirthdaySortType,
    person,
  } = props;

  const {
    id,
    birthday,
    firstName,
    lastName,
    userTag,
    avatarUrl,
    position,
  } = person;

  const isShowCard = openedTab === department[0].id || openedTab === 'all';

  const isShowSeparator = isBirthdaySortType && isShowCard && isNextYear(birthday);

  return (
    <>
      {isShowSeparator && isShowCard && (
        <BirthdaySeparator>{nextYear}</BirthdaySeparator>
      )}
      {isShowCard && (
        <Card to={`/profile/${id}`}>
          <Avatar src={avatarUrl} />
          <Chars>
            <Name>{`${firstName} ${lastName}`}</Name>
            <Tag>{userTag}</Tag>
            <Departament>{`${department[0].title} ${position}`}</Departament>
          </Chars>
          {isBirthdaySortType && (<Birthday>{`${birthdayDay} ${titlesMonths[birthdayMonth - 1]}`}</Birthday>)}
        </Card>
      )}
    </>
  );
};
