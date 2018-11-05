<template>
  <v-card>
    <a
      :href="game.link"
      target="_blank"
    >
      <v-img
        :src="`${imageURL}/${game.appid}/${game.img_logo_url}.jpg`"
        :contain="true"
        class="game-cover"
        aspect-ratio="1"
      />
    </a>
    <v-card-text>
      <v-tooltip bottom>
        <h5
          slot="activator"
          class="game-title"
        >
          {{ game.name }}
        </h5>
        <span>{{ game.name }}</span>
      </v-tooltip>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      imageURL: 'http://media.steampowered.com/steamcommunity/public/images/apps',
    };
  },
  methods: {},
};
</script>
