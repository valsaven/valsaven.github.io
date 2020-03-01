<template>
  <v-app
    id="app"
  >
    <header class="header">
      <h1 class="header__name">
        <a
          href="/"
          title="Val Saven. Software Developer"
          v-text="'valsaven.com'"
        />
      </h1>
    </header>
    <v-content>
      <div class="body">
        <!-- Menu -->
        <main-menu />
        <!-- Main block -->
        <main-block />
      </div>
    </v-content>
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
  @import './assets/_vars.scss';

  html {
    font-size: 16px;
  }

  body {
    //background: $main-bg-color;
    font-family: sans-serif;
  }

  h1,
  h2 {
    text-align: center;
  }

  a {
    color: #000 !important;
    text-decoration: none;
  }

  #app {
    background-color: #fffffa;
    display: flex;
    flex-direction: column;
    max-width: 60%;
    margin: 0 auto;
    color: $main-bg-color;
  }

  .header__name {
    font-family: 'Poiret One', sans-serif;
    /*font-size: 48px;*/
    margin: 20px 0;
  }

  .body {
    display: flex;
    //background-color: $body-bg-color;
    background-color: #fffffa;
    flex-wrap: wrap;
    margin: 20px 0 0 0;
  }

  .menu > header,
  .block > header {
    //background-color: #41b883;
    background-color: #fffffa;
  }

  @media only screen and (max-device-width: 568px) {
    #app {
      max-width: 100%;
    }
  }
</style>
