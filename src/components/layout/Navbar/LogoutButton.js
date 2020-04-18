import React from 'react';
import PropTypes from 'prop-types';

export function LogoutButton({ setUser }) {
  return (
    <button type="button" className="btn btn-dark" onClick={() => setUser('')}>
      Logout
    </button>
  );
}

LogoutButton.propTypes = {
  setUser: PropTypes.func.isRequired,
};
