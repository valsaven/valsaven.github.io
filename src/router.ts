import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/games',
      name: 'Games',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "games" */ './views/Games.vue'),
    },
    {
      path: '/anime',
      name: 'Anime',
      component: () => import(/* webpackChunkName: "anime" */ './views/Anime.vue'),
    },
    {
      path: '/books',
      name: 'Books',
      component: () => import(/* webpackChunkName: "books" */ './views/Books.vue'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
    },
    {
      path: '/movies',
      name: 'Movies',
      component: () => import(/* webpackChunkName: "movies" */ './views/Movies.vue'),
    },
    {
      path: '/photography',
      name: 'Photography',
      component: () => import(/* webpackChunkName: "photography" */ './views/Photography.vue'),
    },
    {
      path: '/programming',
      name: 'Programming',
      component: () => import(/* webpackChunkName: "programming" */ './views/Programming.vue'),
    },
  ],
});
