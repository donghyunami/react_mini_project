import React from 'react';
import Contact from '../components/Contact';
import { useGetContactsQuery } from '../redux/service/contact';

const Contacts = () => {
  const { data: contactData, error, isLoading } = useGetContactsQuery();
  return (
    <div>
      {error && <div>불러오는데 실패했어요</div>}
      {isLoading && <div>불러오는중...</div>}
      {contactData?.map(({ id, name, email }) => (
        <Contact key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default Contacts;
