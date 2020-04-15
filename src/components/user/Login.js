import React from 'react';
import questionMarkIcon from 'bootstrap-icons/icons/question-square-fill.svg';
import PropTypes from 'prop-types';

const Login = ({ users, setUser }) => {
  return (
    <div className="text-center mx-auto mt-5 w-50">
      <form
        className="form-signin"
        onSubmit={(e) => {
          e.preventDefault();
          setUser(document.getElementById('user').value);
        }}
      >
        <img
          className="mb-4"
          src={questionMarkIcon}
          alt="Would you rather?"
          width={72}
          height={72}
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Choose User
        </label>
        <select name="user" id="user" className="form-control">
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
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default Login;
