import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}.vue`);
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
    path: '/games',
    name: 'Games',
    component: loadView('Games'),
  },
  {
    path: '/anime',
    name: 'Anime',
    component: loadView('Anime'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: loadView('Movies'),
  },
  {
    path: '/books',
    name: 'Books',
    component: loadView('Books'),
  },
  {
    path: '/photography',
    name: 'Photography',
    component: loadView('Photography'),
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
