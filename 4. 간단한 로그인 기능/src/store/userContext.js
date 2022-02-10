import React, { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({
    user: '',
    isAuth: false
});

function UserProviderContext({ children }) {
  const [user, setUser] = useState('');
  //나중에 이걸 로컬스토리에 저장해서 관리하기(세션으로 사용) 
  const [isAuth, setIsAuth] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProviderContext;
