import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserNavItem = ({ loggedInUser, users }) => {
  if (!users) return null;

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
  users: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.user,
});

export default connect(mapStateToProps)(UserNavItem);
