import React from 'react';
import Home from './pages/Home';
import PollPage from './pages/PollPage';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/add',
    component: AddQuestion,
  },
  {
    exact: true,
    path: '/leaderboard',
    component: Leaderboard,
  },
  {
    exact: true,
    path: '/questions/:id',
    component: PollPage,
  },
  {
    component: NotFound,
  },
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Switch>
);

export default Routes;
