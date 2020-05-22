// import * as Sentry from '@sentry/browser'
import { history } from 'umi';
import NotFound from './pages/404';

export function patchRoutes(parames: any) {
  console.log(parames);
  parames.routes[0].routes.push({
    component: NotFound,
  });
}

// export function onRouteChange(args: any) {

// }

export function render(oldRender: () => void) {
  // Sentry.init({ dsn: "http://88a95ec7046243b6a5ee912bc314989c@localhost:8888/2" })
  // Sentry.init({ dsn: "http://1861d51045fd47749c741a5011506c68@172.16.24.170:9000/2" })

  if (history.location.pathname === '/') {
    history.replace('/home');
  }
  oldRender();
}
