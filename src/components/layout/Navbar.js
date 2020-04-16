import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserNavItem from './UserNavItem';

const Navbar = ({ loggedInUser, setUser, users }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <svg
          className="bi bi-question-square-fill"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm4.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
            clipRule="evenodd"
          />
        </svg>
        <span style={{ display: 'inline-block', width: '1em' }} />
        Would you rather?
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
              New Question
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
  users: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Navbar;
