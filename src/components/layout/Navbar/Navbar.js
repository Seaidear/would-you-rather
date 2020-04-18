import React from 'react';
import PropTypes from 'prop-types';
import UserNavItem from './UserNavItem';
import { NavbarToggler } from './NavbarToggler';
import { Logo } from '../shared/Logo';
import { NavItemsContainer } from './NavItemsContainer';
import { NavItem } from './NavItem';
import { LogoutButton } from './LogoutButton';

const Navbar = ({ loggedInUser, setUser, users }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {loggedInUser !== '' && <Logo />}
      <NavbarToggler />
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarsExample04"
      >
        {loggedInUser && (
          <UserNavItem loggedInUser={loggedInUser} users={users} />
        )}
        <NavItemsContainer>
          <NavItem route="/" text="Home" />
          <NavItem route="/add" text="Add Question" />
          <NavItem route="/leaderboard" text="Leaderboard" />
        </NavItemsContainer>
        {loggedInUser && <LogoutButton setUser={setUser} />}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  users: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default Navbar;
