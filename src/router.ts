import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import FavoritesItem from './components/favorites/FavoritesItem.vue';

function loadView(view: string) {
  return () => import(`./views/${view}.vue`);
}

const favoritesRoutes = [
  'anime',
  'books',
  'games',
  'movies',
  'music',
  'photo',
].map((type) => ({
  path: type,
  name: type[0].toUpperCase() + type.slice(1),
  component: FavoritesItem,
}));

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
    children: favoritesRoutes,
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
