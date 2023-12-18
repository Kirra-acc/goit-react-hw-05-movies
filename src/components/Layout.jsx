import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          {/* <StyledNavLink to=''></StyledNavLink> */}
        </nav>
      </StyledHeader>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </div>
      {/* <footer>
        <h2>&copy; All rights reserved 2023</h2>
      </footer> */}
    </div>
  );
};

export default Layout;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: white;
  font-size: 1.2rem;
  /* border-bottom: 1px solid black; */
  box-shadow: 0px 0px 10px #6c6666;
  nav {
    display: flex;
    gap: 10px;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
  &.active {
    color: #f38c9d;
  }
  &:hover {
    text-decoration: underline;
  }
`;
