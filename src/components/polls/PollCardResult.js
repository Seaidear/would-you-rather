import React from 'react';
import Card from '../layout/shared/Card';
import { Link } from 'react-router-dom';
export function PollCardResult({
  users,
  question,
  getStyle,
  percentageOptionOne,
  totalVotes,
  percentageOptionTwo,
}) {
  return (
    <Card
      headerText={`Asked by ${users[question.author].name}`}
      imageURL={users[question.author].avatarURL}
    >
      <div className="col-md-9">
        <div className="card-body p-3">
          <h4 className="text-left mb-3">Results:</h4>
          <div className="card p-2" style={getStyle('optionOne')}>
            <p>
              <strong>Would you rather {question.optionOne.text}?</strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentageOptionOne}%` }}
                aria-valuenow={percentageOptionOne}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {percentageOptionOne}%
              </div>
            </div>
            <p>
              <small>
                {question.optionOne.votes.length} out of {totalVotes} votes
              </small>
            </p>
          </div>
          <div className="card p-3" style={getStyle('optionTwo')}>
            <p>
              <strong>Would you rather {question.optionTwo.text}?</strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentageOptionTwo}%` }}
                aria-valuenow={percentageOptionTwo}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {percentageOptionTwo}%
              </div>
            </div>
            <p>
              <small>
                {question.optionTwo.votes.length} out of {totalVotes} votes
              </small>
            </p>
          </div>
        </div>
        <Link to="/" className="btn btn-outline-primary mx-3">
          Back to Homepage
        </Link>
      </div>
    </Card>
  );
}
