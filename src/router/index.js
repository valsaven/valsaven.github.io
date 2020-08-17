import { createRouter, createWebHashHistory } from 'vue-router';

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
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
    // {
    //   path: '/books',
    //   name: 'Books',
    //   component: loadView('Books'),
    // },
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
  ]
});

export default router;
