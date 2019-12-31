import { matchRoutes } from 'react-router-config';

export default (routes, pathname) => {
  const branch = matchRoutes(routes, pathname);

  const promises = branch.reduce((ak, { route }) => {
    route.component.preload();
    ak.push(route);
    return ak;
  }, []);

  return Promise.all(promises);
};
