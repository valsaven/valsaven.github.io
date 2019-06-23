<template>
  <v-app
    id="app"
    dark
  >
    <header class="header">
      <h1 class="header__name">
        <a
          href="/"
          title="Val Saven. Software Developer"
          v-text="'Val Saven'"
        />
      </h1>
      <h2 class="header__role">Software Developer</h2>
    </header>
    <div class="body">
      <!-- Menu -->
      <main-menu/>
      <!-- Main block -->
      <main-block/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';
import MainBlock from '@/components/MainBlock.vue';

@Component({
  components: {
    MainMenu,
    MainBlock,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/vuetify/dist/vuetify.min.css';

$main-text-color: #fffffa;
$main-bg-color: #222;
$head-bg-color: #41b883;
$body-bg-color: #525252;
$wings-1-color: #45ccca;
$wings-2-color: #8fd67a;
$wings-3-color: #e5d59a;
$wings-4-color: #e7966a;
$wings-5-color: #ed5589;
$wings-6-color: #b565c6;
$wings-7-color: #36f;
$wings-8-color: #7392ec;

html {
  font-size: 16px;
}

body {
  background: $main-bg-color;
  font-family: sans-serif;
}

h1,
h2 {
  text-align: center;
}

a {
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;
  background-color: $main-bg-color;
}

.header__name {
  font-family: 'Poiret One', sans-serif;
  font-size: 48px;
  margin: 20px 0;
}

.body {
  display: flex;
  background-color: $body-bg-color;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
}

.menu > header,
.block > header {
  background-color: #41b883;
}

@media only screen and (max-device-width: 568px) {
  #app {
    max-width: 100%;
  }
}
</style>
