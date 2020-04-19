import React from 'react';
import PropTypes from 'prop-types';
import { setUser } from '../../../actions/auth';
import { connect } from 'react-redux';

function LogoutButton({ setUser }) {
  return (
    <button type="button" className="btn btn-dark" onClick={() => setUser('')}>
      Logout
    </button>
  );
}

LogoutButton.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default connect(null, { setUser })(LogoutButton);
