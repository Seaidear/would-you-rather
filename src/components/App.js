import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';
import Spinner from './layout/Spinner';
import Login from './user/Login';

import * as API from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    await API.saveQuestion({ author: user, ...question });
    await getDatafromApi();
  };

  async function getDatafromApi() {
    setLoading(true);
    const initialData = await API.getInitialData();
    const { users, questions } = initialData;
    Object.values(users).forEach((user) => {
      user.numberOfQuestions = Object.values(user.answers).length;
      user.numberOfAnswers = user.questions.length;
      user.score = user.numberOfQuestions + user.numberOfAnswers;
    });
    setUsers(users);
    setQuestions(questions);
    setLoading(false);
  }
  return (
    <>
      <Navbar loggedInUser={user} setUser={setUser} users={users} />

      <div className="container mt-5">
        {loading ? (
          <Spinner />
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
            <Route component={NotFound} />
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
