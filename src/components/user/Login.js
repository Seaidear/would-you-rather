import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ users, setUser }) => {
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <div
      className="text-center mx-auto mt-3 card p-3"
      style={{ width: '65vw', minWidth: '320px', maxWidth: '768px' }}
    >
      <form
        className="form-signin"
        onSubmit={(e) => {
          e.preventDefault();
          selectedUser
            ? setUser(selectedUser)
            : alert('Please choose a user to log in...');
        }}
      >
        <svg
          className="bi bi-question-square-fill"
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          fill="#007bff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm4.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3">Would You Rather?</h3>
        <h4 className="font-weight-normal my-3">Please sign in to continue</h4>
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
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            // disabled={!selectedUser}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default Login;
