import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';
import * as API from '../utils/api';
import Spinner from './layout/Spinner';
import Login from './user/Login';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState({});
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      const initialData = await API.getInitialData();
      const { users, questions } = initialData;
      setUsers(users);
      setQuestions(questions);
      setLoading(false);
    }

    getInitialData();
  }, []);

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
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddQuestion} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route component={NotFound} />
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
