import React from 'react';
import PropTypes from 'prop-types';

const UserScoreCard = ({
  user: { name, avatarURL, numberOfAnswers, numberOfQuestions, score },
  placing,
}) => {
  return (
    <div className="card mb-3 p-3 mx-auto">
      <h3 className="card-title text-center my-0">
        {name} is #{placing}
      </h3>
      <div className="row no-gutters">
        <div className="col-md-3 p-3 text-center">
          <img src={avatarURL} className="card-img rounded-circle" alt={name} style={{ maxWidth: '150px', maxHeight: '150px' }}/>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="card-body col-md-8">
              <div style={{ display: 'flex', alignSelf: 'center' }}>
                <p className="card-text w-75">Answered Questions</p>
                <p className="card-text w-25 text-right">
                  <strong>{numberOfAnswers}</strong>
                </p>
              </div>
              <div style={{ display: 'flex', alignSelf: 'center' }}>
                <p className="card-text w-75">Created Questions</p>
                <p className="card-text w-25 text-right">
                  <strong>{numberOfQuestions}</strong>
                </p>
              </div>
            </div>
            <div className="card-body col-md-4">
              <h5 className="card-title text-center mt-0">Score</h5>
              <div className="text-center">
                <div
                  style={{
                    backgroundColor: '#007bff',
                    width: '75px',
                    height: '75px',
                  }}
                  className="mx-auto rounded-circle"
                >
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '15%',
                      color: '#fff',
                      fontSize: '2rem',
                    }}
                  >
                    {score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserScoreCard.propTypes = {
  user: PropTypes.object.isRequired,
  placing: PropTypes.number.isRequired,
};

export default UserScoreCard;
