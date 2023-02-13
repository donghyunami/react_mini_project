import React, {useCallback } from 'react';
import { MenuWrap, MenuContainer } from './styles';


const Menu = ({ showMenu, children, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!showMenu) return null;

  return (
    <MenuWrap onClick={onCloseModal}>
      <MenuContainer onClick={stopPropagation}>{children}</MenuContainer>
    </MenuWrap>
  );
};

export default React.memo(Menu);
