import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ id, name, email }) => {
  return (
    <div style={{ width: 500, padding: '5px 3px', border: '1px solid' }}>
      <Link
        to={`/contact/${id}`}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        <span style={{ display: 'block' }}>
          <b>이름</b> {name}
        </span>
        <span style={{ display: 'block' }}>
          <b>이메일</b> {email}
        </span>
      </Link>
    </div>
  );
};
export default Contact;
