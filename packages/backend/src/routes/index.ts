import Server from '../server';

import auth from './auth';
import classrooms from './classrooms';
import Route from './route';
import toasts from './toasts';
import users from './users';

export default function generateRoute(server: Server): Route {
  const route = new Route(server);

  route.accept(
    'GET /',
    async () => ({ success: true, payload: {} }),
  );

  route.router.use('/auth', auth);
  route.use(classrooms);
  route.use(users);
  route.use(toasts);

  return route;
}
