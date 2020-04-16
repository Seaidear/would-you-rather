import React from 'react';
import PropTypes from 'prop-types';

const UserNavItem = ({ loggedInUser, users }) => {
  const user = loggedInUser && users[loggedInUser];
  return (
    <>
      {loggedInUser ? (
        <>
          <span
            style={{ color: '#c4c4c4', display: 'inline-block' }}
            className="mr-3"
          >
            Hello, {user.name}
          </span>
          <img
            src={user.avatarURL}
            alt={user.name}
            width="25"
            height="25"
            className="mr-3 rounded-circle"
          />
        </>
      ) : null}
    </>
  );
};

UserNavItem.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
};

export default UserNavItem;
