<template>
  <v-card
    dark
    class="games"
  >
    <v-card-title class="games__search">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>

    <v-container
      class="games__list"
      fluid
      grid-list-md
    >
      <v-progress-linear
        id="games-loader"
        :indeterminate="true"
      />
      <v-data-iterator
        :items="games"
        :search="search"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
        no-data-text="Loading..."
      >
        <v-flex
          slot="item"
          slot-scope="props"
          xs12
          sm6
          md4
          lg3
        >
          <game-card
            :game="props.item"
          />
        </v-flex>
        <template
          slot="items"
          slot-scope="props"
        >
          <td
            class="text-xs-center"
            v-text="props.item.name"
          />
          <td
            class="text-xs-center"
            v-text="props.item.playtime_forever"
          />
        </template>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';

import GameCard from '../components/GameCard.vue';

export default {
  name: 'Games',
  components: {
    gameCard: GameCard,
  },
  data() {
    return {
      search: '',
      rowsPerPageItems: [12, 24, 48, 100, 500, 1000],
      pagination: {
        rowsPerPage: 12,
      },
      gameCount: 0,
      games: [],
    };
  },
  created() {
    async function getGames() {
      try {
        const games = JSON.parse(localStorage.getItem('games'));

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

    getGames.call(this);
  },
};
</script>

<style lang="scss" scoped>
.games {
  &__search,
  &__list {
    background-color: var(--body-bg-color);
  }
}
</style>
