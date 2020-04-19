import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, headerText, imageURL }) => {
  return (
    <div className="card mb-3 p-3 mx-auto">
      <h3 className="card-title text-left mb-3">{headerText}</h3>
      <div className="row no-gutters">
        <div className="col-md-3 p-1 text-center">
          <img
            src={imageURL}
            className="card-img rounded-circle"
            style={{ maxWidth: '120px', maxHeight: '120px' }}
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default Card;
