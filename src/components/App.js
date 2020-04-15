import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import { _getQuestions, _getUsers } from '../_DATA';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState(null);
  const [questions, setquestions] = useState(null);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar loggedInUser={user} />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddQuestion} />
          <Route exact path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    </>
  );
}

export default App;
