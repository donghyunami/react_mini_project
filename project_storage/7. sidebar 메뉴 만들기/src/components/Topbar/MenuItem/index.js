import React from 'react';
import { ItemStyle } from './styles';

const MenuItem= ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default React.memo(MenuItem);
