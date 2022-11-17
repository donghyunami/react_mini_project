import React from 'react'
import MenuItem from './MenuItem';
import { CloseBtn, NavbarToggle, StyledNavMenu } from './styles';

function Sidebar({isOpen, showCloseSidebar}) {
  return (
    <StyledNavMenu className={isOpen ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showCloseSidebar}>
        <NavbarToggle className='navbar-toggle'>
        <CloseBtn onClick={showCloseSidebar}>
          <span>&times;</span>
        </CloseBtn>
        </NavbarToggle>
        <MenuItem/>
      </ul>
    </StyledNavMenu>
  )
}

export default Sidebar;
