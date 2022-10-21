import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import FavoritesItem from './components/favorites/FavoritesItem.vue';

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
    children: [
      {
        path: 'anime',
        name: 'Anime',
        component: FavoritesItem,
      },
      {
        path: 'books',
        name: 'Books',
        component: FavoritesItem
      },
      {
        path: 'games',
        name: 'Games',
        component: FavoritesItem
      },
      {
        path: 'movies',
        name: 'Movies',
        component: FavoritesItem
      },
      {
        path: 'music',
        name: 'Music',
        component: FavoritesItem
      },
      {
        path: 'photo',
        name: 'Photo',
        component: FavoritesItem
      },
    ]
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
