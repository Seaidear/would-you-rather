import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import PageContainer from '../layout/shared/PageContainer';
import { connect } from 'react-redux';
import { saveAnswer } from '../../actions/questions';
import { PollCardVote } from '../polls/PollCardVote';
import { PollCardResult } from '../polls/PollCardResult';

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
        <PollCardResult
          users={users}
          question={question}
          getStyle={getStyle}
          percentageOptionOne={percentageOptionOne}
          totalVotes={totalVotes}
          percentageOptionTwo={percentageOptionTwo}
        />
      </PageContainer>
    );
  else
    return (
      <PageContainer>
        <PollCardVote
          users={users}
          question={question}
          saveAnswer={saveAnswer}
          user={user}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      </PageContainer>
    );
};

PollPage.propTypes = {
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth,
  users: state.users,
  questions: state.questions,
});

export default withRouter(connect(mapStateToProps, { saveAnswer })(PollPage));
