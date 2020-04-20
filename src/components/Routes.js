import React from 'react';
import Home from './pages/Home';
import PollPage from './pages/PollPage';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={AddQuestion} />
    <Route exact path="/leaderboard" component={Leaderboard} />
    <Route exact path="/questions/:id" component={PollPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
