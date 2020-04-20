import React from 'react';
import UserScoreCard from '../user/UserScoreCard';
import PropTypes from 'prop-types';
import PageContainer from '../layout/shared/PageContainer';
import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  users = Object.values(users);

  users.forEach((user) => {
    user.numberOfAnswers = Object.values(user.answers).length;
    user.numberOfQuestions = user.questions.length;
    user.score = user.numberOfQuestions + user.numberOfAnswers;
  });

  return (
    <PageContainer headerText="Leaderboard">
      {users
        .sort((a, b) => {
          return b.score - a.score;
        })
        .map((user, index) => {
          return (
            <UserScoreCard key={user.id} placing={index + 1} user={user} />
          );
        })}
    </PageContainer>
  );
};

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
