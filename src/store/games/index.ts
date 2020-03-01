// // import axios from 'axios';
// import {
//   Module, MutationTree, ActionTree, ActionContext,
// } from 'vuex';
//
// class GamesState {
//   public games: any[];
//
//   public gamesCount: number | null;
//
//   constructor() {
//     this.games = [];
//     this.gamesCount = null;
//   }
// }
//
// /* Mutations */
// interface Item {
//   item: string;
//   value: any;
// }
//
// function setItem(state: GamesState, Item: Item) {
//   (state as any)[Item.item] = Item.value; // eslint-disable-line no-param-reassign
// }
//
// const GamesMutations: MutationTree<GamesState> = {
//   setItem,
// };
//
// /* Actions */
// async function getGames(store: ActionContext<GamesState, any>, state: GamesState): Promise<any> {
//   try {
//     const gamesData = localStorage.getItem('games');
//     const games = JSON.parse(gamesData || '');
//
//     const req = await axios.get(
//       'https://wt-2f9b37427d5e30fe8da0999bd311e211-0.sandbox.auth0-extend.com/proxy/games',
//     );
//     const res = req.data.response;
//
//     store.commit('setItem', {
//       item: 'gamesCount',
//       value: Number(res.game_count),
//     });
//
//     store.commit('setItem', {
//       item: 'games',
//       value: res.games,
//     });
//
//     // FIXME: state is undefined here
//     if (games && games.length === state.gamesCount) {
//       store.commit('setItem', {
//         item: 'games',
//         value: games,
//       });
//     } else {
//       store.commit('setItem', {
//         item: 'games',
//         value: res.games,
//       });
//       localStorage.setItem('games', JSON.stringify(state.games));
//     }
//   } catch (e) {
//     console.log(`Error: ${e}`);
//   } finally {
//     // document.getElementById('games-loader').style.display = 'none';
//   }
// }
//
// const GamesActions: ActionTree<GamesState, any> = {
//   getGames,
// };
//
// export default class GamesModule implements Module<GamesState, any> {
//   public namespaced = true;
//
//   public state: GamesState;
//
//   public mutations = GamesMutations;
//
//   public actions = GamesActions;
//
//   constructor() {
//     this.state = new GamesState();
//   }
// }
