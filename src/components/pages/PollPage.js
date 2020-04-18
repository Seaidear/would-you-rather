import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import PageContainer from '../layout/shared/PageContainer';
import Card from '../layout/shared/Card';

const PollPage = ({ questions, users, user, saveAnswer, match }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('optionOne');

  const question = questions[match.params.id];
  if (!question) return <Redirect to="/404" />;

  const getStyle = (option) => {
    if (question[option].votes.find((element) => element === user)) {
      return {
        backgroundColor: '#17a2b8',
      };
    }
  };

  const isQuestionAlreadyAnswered = !!users[user].answers[question.id];
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const percentageOptionOne = (
    (question.optionOne.votes.length / totalVotes) *
    100
  ).toFixed(0);
  const percentageOptionTwo = (
    (question.optionTwo.votes.length / totalVotes) *
    100
  ).toFixed(0);

  if (isQuestionAlreadyAnswered)
    return (
      <PageContainer>
        <Card
          headerText={`Asked by ${question.authorName}`}
          imageURL={question.authorAvatarURL}
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
          </div>
        </Card>
      </PageContainer>
    );
  else
    return (
      <PageContainer headerText="">
        <Card
          headerText={`${question.authorName} asks:`}
          imageURL={question.authorAvatarURL}
        >
          <div className="col-md-9">
            <div className="card-body p-3">
              <h4 className="text-left mb-3">Would you rather...</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  saveAnswer({
                    authedUser: user,
                    qid: question.id,
                    answer: selectedAnswer,
                  });
                }}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="optionOne"
                    checked={selectedAnswer === 'optionOne'}
                    onChange={(e) => {
                      setSelectedAnswer(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    {question.optionOne.text}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="optionTwo"
                    checked={selectedAnswer === 'optionTwo'}
                    onChange={(e) => {
                      setSelectedAnswer(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    {question.optionTwo.text}
                  </label>
                </div>
                <input
                  type="submit"
                  value="Submit Your Answer"
                  className="btn btn-primary btn-block mt-3"
                />
              </form>
            </div>
          </div>
        </Card>
      </PageContainer>
    );
};

PollPage.propTypes = {
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

export default withRouter(PollPage);
