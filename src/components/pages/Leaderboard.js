import React from 'react';
import UserScoreCard from '../user/UserScoreCard';
import PropTypes from 'prop-types';

const Leaderboard = ({ users }) => {
  console.log(users);
  return (
    <div
      className="card p-5 mx-auto"
      style={{ width: '65vw', minWidth: '320px', maxWidth: '768px' }}
    >
      <h2 className="mb-5 text-center">Leaderboard</h2>
      {Object.values(users)
        .sort((a, b) => {
          return b.score - a.score;
        })
        .map((user, index) => {
          return (
            <UserScoreCard key={user.id} placing={index + 1} user={user} />
          );
        })}
    </div>
  );
};

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired,
};

export default Leaderboard;
