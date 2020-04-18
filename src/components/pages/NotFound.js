import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../layout/shared/PageContainer';

const NotFound = () => {
  return (
    <PageContainer headerText="404 | Page not found">
      <div className="text-center my-5">
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFound;
