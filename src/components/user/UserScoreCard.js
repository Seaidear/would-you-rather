import React from 'react';
import PropTypes from 'prop-types';
import Card from '../layout/shared/Card';

const UserScoreCard = ({
  user: { name, avatarURL, numberOfAnswers, numberOfQuestions, score },
  placing,
}) => {
  return (
    <Card headerText={`${name} is #${placing}`} imageURL={avatarURL}>
      <div className="col-md-9">
        <div className="row">
          <div className="card-body p-3 col-md-8">
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
                  backgroundColor: '#127ba3',
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
    </Card>
  );
};

UserScoreCard.propTypes = {
  user: PropTypes.object.isRequired,
  placing: PropTypes.number.isRequired,
};

export default UserScoreCard;
