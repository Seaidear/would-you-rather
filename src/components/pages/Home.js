import React from 'react';
import PropTypes from 'prop-types';
import PollCard from '../polls/PollCard';
import PageContainer from '../layout/shared/PageContainer';
import { connect } from 'react-redux';

const Home = ({ questions, users, user }) => {
  const answeredQuestions = filterAndSortQuestions(
    questions,
    (question) => users[user].answers[question.id],
  );
  const unansweredQuestions = filterAndSortQuestions(
    questions,
    (question) => !users[user].answers[question.id],
  );

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
            {unansweredQuestions}
          </div>
          <div
            className="tab-pane fade"
            id="answered"
            role="tabpanel"
            aria-labelledby="answered-tab"
          >
            {answeredQuestions}
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

const filterAndSortQuestions = (questions, filterFn) =>
  Object.values(questions)
    .filter((question) => filterFn(question))
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((question) => <PollCard key={question.id} question={question} />);

const mapStateToProps = (state) => ({
  user: state.auth,
  users: state.users,
  questions: state.questions,
});

export default connect(mapStateToProps)(Home);
