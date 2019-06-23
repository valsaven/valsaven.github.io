import axios from 'axios';
import { Module, MutationTree, ActionTree } from 'vuex';
import { RootState, GamesState } from '@/types';


const namespaced: boolean = true;

const state: GamesState = {
  games: [],
  gamesCount: null,
};

const actions: ActionTree<GamesState, any> = {
  async getGames(): Promise<any> {
    try {
      this.games.push(1);
      const games = JSON.parse(localStorage.getItem('games'));
      debugger

      const req = await axios.get('https://wt-2f9b37427d5e30fe8da0999bd311e211-0.sandbox.auth0-extend.com/proxy/games');
      const res = req.data.response;

      this.gameCount = Number(res.game_count);
      this.games = res.games;

      if (games && games.length === this.gameCount) {
        this.games = games;
      } else {
        this.games = res.games;
        localStorage.setItem('games', JSON.stringify(this.games));
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
      document.getElementById('games-loader').style.display = 'none';
    }
  }
};

export const games: Module<GamesState, RootState> = {
    namespaced,
    state,
    // getters,
    actions,
    // mutations
};
