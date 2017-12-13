import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main';

// Components
import Anime from '../components/Anime';
import Books from '../components/Books';
import Contacts from '../components/Contacts';
import Movies from '../components/Movies';
import Photography from '../components/Photography';
import Programming from '../components/Programming';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/anime',
      name: 'Anime',
      component: Anime,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography,
    },
    {
      path: '/programming',
      name: 'Programming',
      component: Programming,
    },
  ],
});
