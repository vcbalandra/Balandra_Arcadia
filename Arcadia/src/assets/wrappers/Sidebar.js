import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 250px;
  background-color: #008080;
  color: white;
  @media (max-width: 768px) { width: 100vw; }  
  @media (max-width: 480px) { width: 100vw; } 
`;

export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const LogoText = styled.h2`
  text-align: left;
`;

export const SidebarLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  width: 100%;
  
  &.active {
    background-color: rgb(9, 161, 161);  
    font-weight: bold;  
  }

  &:hover {
    background-color: rgb(9, 161, 161);
    color: white;
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 10px;
  font-size: 18px;
`;