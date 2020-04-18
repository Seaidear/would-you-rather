import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../layout/PageContainer';

const Login = ({ users, setUser }) => {
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <>
      <img
        src="https://lifehacks.io/wp-content/uploads/Clean-Would-You-Rather-Questions-7.jpg"
        alt="Would you rather"
        className="img-fluid"
      />
      <PageContainer>
        <form
          className="form-signin text-center"
          onSubmit={(e) => {
            e.preventDefault();
            selectedUser
              ? setUser(selectedUser)
              : alert('Please choose a user to log in...');
          }}
        >
          <h5 className="my-5">Please sign in to continue</h5>
          <label htmlFor="inputEmail" className="sr-only">
            Choose User
          </label>
          <select
            name="user"
            id="user"
            className="form-control my-3"
            value={selectedUser}
            onChange={(e) => {
              e.preventDefault();
              setSelectedUser(e.target.value);
            }}
            required
          >
            <option value="" disabled>
              Select a user...
            </option>
            {Object.values(users).map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <div className="mt-3">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </PageContainer>
    </>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default Login;
