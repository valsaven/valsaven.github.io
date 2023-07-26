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
].map((route) => ({
  path: route,
  name: route,
  component: FavoritesItem,
}));

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: loadView('HomePage'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadView('ProjectsPage'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: loadView('FavoritesPage'),
    children: favoritesRoutes,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: loadView('ContactsPage'),
  },
];

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
