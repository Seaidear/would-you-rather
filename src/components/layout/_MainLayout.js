import React from 'react';
import Navbar from './Navbar/Navbar';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';

const MainLayout = ({ users, children }) => {
  return (
    <>
      <Navbar users={users} />
      <div className="full-height">{children}</div>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  users: PropTypes.object,
};

export default MainLayout;
