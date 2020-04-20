import Home from '../pages/Home';
import PollPage from '../pages/PollPage';
import AddQuestion from '../pages/AddQuestion';
import Leaderboard from '../pages/Leaderboard';
import NotFound from '../pages/NotFound';

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

export default routes;
