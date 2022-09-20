import Home from '~/pages/Home/Home';
import Follwing from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Follwing },
  { path: '/profile', component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
