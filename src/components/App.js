import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import Spinner from './layout/Spinner';
import Home from './pages/Home';
import PollPage from './pages/PollPage';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import Login from './user/Login';
import { Switch, Route } from 'react-router-dom';

import * as API from '../utils/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import PageContainer from './layout/PageContainer';

function App() {
  const [user, setUser] = useState('sarahedo');
  const [users, setUsers] = useState(null);
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      await getDatafromApi();
    }

    getInitialData();
  }, []);

  const addQuestion = async (question) => {
    setLoading(true);
    await API.saveQuestion({ author: user, ...question });
    await getDatafromApi();
    setLoading(false);
  };

  const saveAnswer = async ({ authedUser, qid, answer }) => {
    setLoading(true);
    await API.saveQuestionAnswer({ authedUser, qid, answer });
    await getDatafromApi();
    setLoading(false);
  };

  async function getDatafromApi() {
    setLoading(true);
    const data = await API.getInitialData();
    const { users, questions } = data;

    Object.values(users).forEach((user) => {
      user.numberOfAnswers = Object.values(user.answers).length;
      user.numberOfQuestions = user.questions.length;
      user.score = user.numberOfQuestions + user.numberOfAnswers;
    });

    Object.values(questions).forEach((question) => {
      question.authorName = users[question.author].name;
      question.authorAvatarURL = users[question.author].avatarURL;
    });

    setUsers(users);
    setQuestions(questions);
    setLoading(false);
  }
  return (
    <>
      <Navbar loggedInUser={user} setUser={setUser} users={users} />

      {loading ? (
        <PageContainer>
          <Spinner />
        </PageContainer>
      ) : !user ? (
        <Login setUser={setUser} users={users} />
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home questions={questions} users={users} user={user} />
            )}
          />
          <Route
            exact
            path="/add"
            render={() => <AddQuestion addQuestion={addQuestion} />}
          />
          <Route
            exact
            path="/leaderboard"
            render={() => <Leaderboard users={users} />}
          />

          <Route
            exact
            path="/questions/:id"
            render={() => (
              <PollPage
                questions={questions}
                users={users}
                user={user}
                saveAnswer={saveAnswer}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      )}
    </>
  );
}

export default App;
