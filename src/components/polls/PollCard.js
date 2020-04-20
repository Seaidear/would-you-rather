import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../layout/shared/Card';
import { connect } from 'react-redux';

const PollCard = ({ question, users }) => {
  const date = new Date(question.timestamp);
  return (
    <Card
      headerText={`${users[question.author].name} asks:`}
      imageURL={users[question.author].avatarURL}
    >
      <div className="col-md-9">
        <div className="card-body p-3">
          <h4 className="text-left mb-3">Would you rather</h4>
          <p className="card-text">...{question.optionOne.text}...</p>
          <Link
            to={`/questions/${question.id}`}
            className="btn btn-outline-primary btn-block"
          >
            View Poll
          </Link>
          <p className="text-center">
            <small>
              This poll was created on {date.getFullYear()}/
              {date.getMonth() + 1}/{date.getDate()} at{' '}
              {(date.getHours() < 10 ? '0' : '') + date.getHours()}:
              {(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}
            </small>
          </p>
        </div>
      </div>
    </Card>
  );
};

PollCard.propTypes = {
  question: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(PollCard);
