import React from 'react';
import { FaPlus, FaList, FaUser, FaUserShield } from 'react-icons/fa';
import { SidebarWrapper, Logo, LogoText, SidebarLinks, SidebarLink, SidebarIcon } from '../assets/wrappers/Sidebar'; 

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <LogoText>Admin Dashboard</LogoText>
      </Logo>
      <SidebarLinks>
        <li>
          <SidebarLink to="/dashboard/add-event">
            <SidebarIcon>
              <FaPlus />
            </SidebarIcon>
            Add Event
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/dashboard/all-events">
            <SidebarIcon>
              <FaList />
            </SidebarIcon>
            Event List
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/dashboard/profile">
            <SidebarIcon>
              <FaUser />
            </SidebarIcon>
            Profile
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/dashboard/admin">
            <SidebarIcon>
              <FaUserShield />
            </SidebarIcon>
            Admin
          </SidebarLink>
        </li>
      </SidebarLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;