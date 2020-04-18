import React from 'react';
import PropTypes from 'prop-types';
import PollCard from '../polls/PollCard';
import PageContainer from '../layout/PageContainer';

const Home = ({ questions, users, user }) => {
  return (
    <PageContainer headerText="Poll Overview">
      <div>
        <ul
          className="nav nav-tabs"
          id="myTab"
          role="tablist"
          style={{ borderBottom: 'none' }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="unanswered-tab"
              data-toggle="tab"
              href="#unanswered"
              role="tab"
              aria-controls="unanswered"
              aria-selected="true"
            >
              Unanswered
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="answered-tab"
              data-toggle="tab"
              href="#answered"
              role="tab"
              aria-controls="answered"
              aria-selected="false"
            >
              Answered
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="unanswered"
            role="tabpanel"
            aria-labelledby="unanswered-tab"
          >
            {Object.values(questions)
              .filter((question) => {
                return !users[user].answers[question.id];
              })
              .sort((a, b) => {
                return b.timestamp - a.timestamp;
              })
              .map((question) => {
                return <PollCard key={question.id} question={question} />;
              })}
          </div>
          <div
            className="tab-pane fade"
            id="answered"
            role="tabpanel"
            aria-labelledby="answered-tab"
          >
            {Object.values(questions)
              .filter((question) => {
                return users[user].answers[question.id];
              })
              .sort((a, b) => {
                return b.timestamp - a.timestamp;
              })
              .map((question) => {
                question.authorName = users[question.author].name;
                question.authorAvatarURL = users[question.author].avatarURL;
                return <PollCard key={question.id} question={question} />;
              })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

Home.propTypes = {
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
};

export default Home;
