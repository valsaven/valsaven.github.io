<template>
  <v-card dark>
    <v-card-title class="search">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>

    <v-container
      class="games-list"
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
          <v-card>
            <a
              :href="props.item.link"
              target="_blank"
            >
              <v-card-media
                :src="`${imageURL}/${props.item.appid}/${props.item.img_logo_url}.jpg`"
                height="213px"
                class="game-cover"
              />
            </a>
            <v-card-title>
              <v-tooltip bottom>
                <h5
                  slot="activator"
                  class="game-title"
                >
                  {{ props.item.name }}
                </h5>
                <span>{{ props.item.name }}</span>
              </v-tooltip>
            </v-card-title>
          </v-card>
        </v-flex>
        <template
          slot="items"
          slot-scope="props"
        >
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.playtime_forever }}</td>
        </template>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';
import oneLineTrim from 'common-tags/es/oneLineTrim';

export default {
  name: 'Games',
  data() {
    return {
      search: '',
      rowsPerPageItems: [12, 24, 48, 100, 500, 1000],
      pagination: {
        rowsPerPage: 12,
      },
      gameCount: 0,
      games: [],
      apiKey: '4E1F1A228D42C10C36263E8F46176A33',
      steamID: '76561198076053493',
      imageURL: 'http://media.steampowered.com/steamcommunity/public/images/apps',
    };
  },
  created() {
    async function getGames() {
      try {
        const games = JSON.parse(localStorage.getItem('games'));

        const link = 'https://wt-2f9b37427d5e30fe8da0999bd311e211-0.run.webtask.io/proxy/stm/IPlayerService/GetOwnedGames/v0001/';
        const options = oneLineTrim`
          ?key=${this.apiKey}
          &include_played_free_games=1
          &include_appinfo=1
          &format=json
          &steamid=${this.steamID}
          `;

        const req = await axios.get(`${link}${options}`);

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

<style scoped>
.search,
.games-list,
.table {
  background-color: var(--body-bg-color);
}

.card__title {
  width: 100%;
  width: fill-available;
}

.tooltip {
  width: inherit;
}

.game-title {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card .game-cover {
  margin: auto;
  max-height: 46px;
}
</style>
