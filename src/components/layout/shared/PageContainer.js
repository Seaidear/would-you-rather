import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children, headerText }) => {
  return (
    <div
      className="container p-3 mx-auto"
      style={{ width: '65vw', minWidth: '320px', maxWidth: '768px' }}
    >
      <h2 className="my-3 text-center">{headerText}</h2>

      {children}
    </div>
  );
};

PageContainer.defaultProps = {
  headerText: '',
};

PageContainer.propTypes = {
  headerText: PropTypes.string,
};

export default PageContainer;
