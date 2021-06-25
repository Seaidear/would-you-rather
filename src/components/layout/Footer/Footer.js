import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const user = useSelector((state) => state.auth);

  if (!user) return null;

  return (
    <div className="text-center mt-5 p-3 bg-primary">
      <p className="text-white-50 mb-0">Created by Patrick Obermeier</p>
    </div>
  );
};

export default Footer;
