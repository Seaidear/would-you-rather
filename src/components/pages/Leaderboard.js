import React from 'react';
import UserScoreCard from '../user/UserScoreCard';
import PropTypes from 'prop-types';
import PageContainer from '../layout/shared/PageContainer';

const Leaderboard = ({ users }) => {
  return (
    <PageContainer headerText="Leaderboard">
      {Object.values(users)
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

export default Leaderboard;
