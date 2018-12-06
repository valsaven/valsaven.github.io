<template>
  <v-card class="game">
    <a
      :href="game.link"
      target="_blank"
      class="game__link"
    >
      <v-img
        :src="`${imageURL}/${game.appid}/${game.img_logo_url}.jpg`"
        :contain="true"
        class="game__cover"
        aspect-ratio="1"
      />
    </a>
    <v-card-text>
      <v-tooltip bottom>
        <h5
          slot="activator"
          class="game__title"
          v-text="game.name"
        />
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
};
</script>

<style lang="scss" scoped>
.game {
  &__title {
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  &__cover {
    margin: auto;
    max-height: 46px;
  }
}
</style>
