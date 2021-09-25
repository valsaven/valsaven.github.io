<template>
  <v-card class="games">
    <v-card-title class="games__search">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        hide-details
        label="Search"
        single-line
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
        v-model:options="options"
        :items="games"
        :search="search"
        no-data-text="Loading..."
      >
        <template #default="props">
          <v-row>
            <v-col
              v-for="(item, i) in props.items"
              :key="i"
              cols="12"
              lg="3"
              md="4"
              sm="6"
            >
              <game-card :game="item" />
            </v-col>
          </v-row>
        </template>

        <template
          #items="props"
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
    // ...mapState('games', ['games', 'gamesCount']),
  },
  created() {
    this.getGames();
  },
  methods: {
    // ...mapActions('games', ['getGames']),
  },
};
</script>

<style scoped>
.games__search,
.games__list {
  background-color: var(--body-bg-color);
}
</style>
