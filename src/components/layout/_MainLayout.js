import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="full-height">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
