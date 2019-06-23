import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '@/types';

import books from './books';
import { GamesModule } from './games';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: true,
  modules: {
    books,
    games: new GamesModule(),
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
