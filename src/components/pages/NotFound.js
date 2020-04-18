import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className="card p-3 mx-auto"
      style={{ width: '65vw', minWidth: '320px', maxWidth: '768px' }}
    >
      <h2 className="my-5 text-center">404 | Page not found</h2>

      <div className="text-center mb-5">
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
