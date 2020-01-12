import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadView('Home'),
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
      path: '/books',
      name: 'Books',
      component: loadView('Books'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: loadView('Contacts'),
    },
    {
      path: '/movies',
      name: 'Movies',
      component: loadView('Movies'),
    },
    {
      path: '/photography',
      name: 'Photography',
      component: loadView('Photography'),
    },
    {
      path: '/programming',
      name: 'Programming',
      component: loadView('Programming'),
    },
  ],
});
