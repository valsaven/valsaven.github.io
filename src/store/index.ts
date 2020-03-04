import Vue from 'vue';
import Vuex from 'vuex';

import books from './books';
import GamesModule from './games';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    books,
    games: new GamesModule(),
  },
});
