import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserNavItem from './UserNavItem';

const Navbar = ({ loggedInUser, setUser, users }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <h1
          className="h4 mb-0 font-weight-lighter"
          style={{ display: 'inline-block' }}
        >
          WOULD YOU RATHER?
        </h1>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarsExample04"
      >
        {loggedInUser && (
          <UserNavItem loggedInUser={loggedInUser} users={users} />
        )}
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/add">
              Add Question
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/leaderboard">
              Leaderboard
            </Link>
          </li>
        </ul>
        {loggedInUser && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setUser('')}
          >
            Logout
          </button>
        )}
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
