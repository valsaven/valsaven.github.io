import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(`./views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadView('Projects'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: loadView('Favorites'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: loadView('Contacts'),
  },
];

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
