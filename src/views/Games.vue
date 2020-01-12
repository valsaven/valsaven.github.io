<template>
  <v-card
    dark
    class="games"
  >
    <v-card-title class="games__search">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
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
        :options.sync="options"
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
          <game-card :game="props.item" />
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
import { mapState, mapActions } from 'vuex';

import GameCard from '../components/GameCard.vue';

export default {
  name: 'Games',
  components: {
    gameCard: GameCard,
  },
  data() {
    return {
      search: '',
      itemsPerPageArray: [12, 24, 48, 100, 500, 1000],
      options: {
        itemsPerPage: 4,
      },
    };
  },
  computed: {
    ...mapState('games', ['games', 'gamesCount']),
  },
  created() {
    this.getGames();
  },
  methods: {
    ...mapActions('games', ['getGames']),
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
