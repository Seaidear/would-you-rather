import React from 'react';
import Navbar from './Navbar/Navbar';
import PropTypes from 'prop-types';
import Footer from './Footer';

const MainLayout = ({ loggedInUser, setUser, users, children }) => {
  return (
    <>
      <Navbar loggedInUser={loggedInUser} setUser={setUser} users={users} />
      <div className="full-height">{children}</div>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  users: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default MainLayout;
