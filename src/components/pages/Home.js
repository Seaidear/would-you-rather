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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="unanswered-tab"
              data-bs-toggle="tab"
              data-bs-target="#unanswered"
              role="tab"
              aria-controls="unanswered"
              aria-selected="true"
            >
              Unanswered
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="answered-tab"
              data-bs-toggle="tab"
              data-bs-target="#answered"
              role="tab"
              aria-controls="answered"
              aria-selected="false"
            >
              Answered
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="unanswered"
            role="tabpanel"
            aria-labelledby="unanswered-tab"
          >
            {unansweredQuestions.length !== 0 ? (
              unansweredQuestions
            ) : (
              <h5 className="text-center mt-5">Nothing to see here</h5>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="answered"
            role="tabpanel"
            aria-labelledby="answered-tab"
          >
            {answeredQuestions.length !== 0 ? (
              answeredQuestions
            ) : (
              <h5 className="text-center mt-5">Nothing to see here</h5>
            )}
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
