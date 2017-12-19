<template>
  <v-app id="app">
    <header>
      <h1>
        <a href="/" title="Val Saven. Software Developer">Val Saven</a>
      </h1>
      <h2>Software Developer</h2>
    </header>
      <div class="wrapper">
        <!-- Menu -->
        <main-menu></main-menu>
        <!-- Main block -->
        <main-block></main-block>
      </div>
  </v-app>
</template>

<script>
  import MainMenu from './components/MainMenu.vue';
  import MainBlock from './components/MainBlock.vue';

  export default {
    name: 'app',
    components: {
      MainMenu,
      MainBlock
    },
    data() {
     return {}
    },
  };
</script>

<style lang="css">
  @import '../node_modules/vuetify/dist/vuetify.min.css';
  @import './assets/style/App.css';
</style>
