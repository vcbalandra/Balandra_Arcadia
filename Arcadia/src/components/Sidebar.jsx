import React from 'react';
import { FaPlus, FaList, FaUser, FaUserShield, FaUsers, FaAddressBook  } from 'react-icons/fa';
import { SidebarWrapper, Logo, LogoText, SidebarLinks, SidebarLink, SidebarIcon } from '../assets/wrappers/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';

const Sidebar = () => {

  const { user } = useDashboardContext();

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
          <SidebarLink to="/dashboard/add-partners">
            <SidebarIcon>
              <FaUsers />
            </SidebarIcon>
            Add Partners
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/dashboard/all-partners">
            <SidebarIcon>
              <FaAddressBook />
            </SidebarIcon>
            Partners List
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
        {user?.role === 'superAdmin' && (
          <li>
            <SidebarLink to="/dashboard/admin">
              <SidebarIcon>
                <FaUserShield />
              </SidebarIcon>
              Manage Users
            </SidebarLink>
          </li>
        )}
      </SidebarLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;