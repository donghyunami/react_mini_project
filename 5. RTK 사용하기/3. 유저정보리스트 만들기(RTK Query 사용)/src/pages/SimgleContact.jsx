import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetContactQuery } from '../redux/service/contact';

const SimgleContact = () => {
  const { id: contactId } = useParams();
  const { data, isError, isLoading } = useGetContactQuery(contactId);
  console.log(data);
  return (
    <>
      <h2>유저 정보 상세보기</h2>
      <div style={{ width: 500, padding: '5px 3px', border: '1px solid' }}>
        {isLoading && <span>불러오는중</span>}
        {isError && <span>불러오는데 문제가 생겼습니다.</span>}
        {data && (
          <>
            <span style={{ display: 'block' }}>
              <b>이름</b> {data.name}
            </span>
            <span style={{ display: 'block' }}>
              <b>이메일</b> {data.email}
            </span>
            <span style={{ display: 'block' }}>
              <b>닉네임</b> {data.nickname}
            </span>
            <span style={{ display: 'block' }}>
              <b>나이</b> {data.age}
            </span>
          </>
        )}
      </div>
    </>
  );
};
export default SimgleContact;
